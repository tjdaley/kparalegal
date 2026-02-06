# STAGE 1: Build Frontend
FROM node:20-slim AS frontend-builder

WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY index.html vite.config.js tailwind.config.js postcss.config.js ./
COPY src ./src
RUN npm run build

# STAGE 2: Build Python Dependencies
FROM python:3.12-slim AS python-builder

WORKDIR /build
COPY requirements.txt .

# Install build-time dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    libffi-dev \
    && pip install --user --no-cache-dir -r requirements.txt

# STAGE 3: Runtime
FROM python:3.12-slim

# Install runtime dependencies
RUN apt-get update && apt-get install -y \
    python3-cffi \
    python3-brotli \
    libpango-1.0-0 \
    libpangoft2-1.0-0 \
    libharfbuzz-subset0 \
    libjpeg-dev \
    libopenjp2-7-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Security: Create a non-root user
RUN groupadd -r kparalegal && useradd -r -g kparalegal kparalegal

WORKDIR /app

# Copy Python packages from builder
COPY --from=python-builder /root/.local /home/kparalegal/.local

# Copy built frontend from frontend-builder
COPY --from=frontend-builder /frontend/dist ./dist

# Copy application code
COPY main.py ./
COPY db ./db
COPY util ./util
COPY images ./images

# Set correct permissions
RUN mkdir -p /var/cache/fontconfig /home/kparalegal && \
    chown -R kparalegal:kparalegal /var/cache/fontconfig /home/kparalegal /app

USER kparalegal
ENV PATH=/home/kparalegal/.local/bin:$PATH

EXPOSE 8093

# Use uvicorn directly for better production deployment
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8093", "--workers", "4"]
