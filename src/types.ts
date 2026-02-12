export interface Parameter {
    id: number;
    key: string;
    value: string;
    environment: string;
    created_at: string;
    updated_at?: string;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    order_link: string;
    image_path: string;
    icon: string;
    slug: string;
    created_at: string;
    updated_at?: string;
}