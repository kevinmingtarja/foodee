type Restaurant = {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_closed: boolean;
    url: string;
    review_count: number;
    categories: Category[];
    rating: number;
    coordinates: Coordinate;
    transactions: any[];
    price: string;
    location: RestaurantLocation;
    phone: string;
    display_phone: string;
    distance: number;
};

type RestaurantLocation = {
    address1: string;
    address2: string;
    address3?: string;
    city: string;
    zip_code: string;
    country: string;
    state: string;
    display_address: string[];
};

type Coordinate = {
    latitude: number;
    longitude: number;
};

type Category = {
    alias: string;
    title: string;
};

type Vote = {
    alias: string;
    name: string;
    image_url: string;
    url: string;
    review_count: number;
    rating: number;
    price: string;
    phone: string;
    display_phone: string;
    address1: string;
    address2: string;
    address3: string;
    city: string;
    zip_code: string;
    country: string;
    state: string;
    vote: boolean;
    user_id: string;
    username: string;
};

type Result = {
    user_id: string;
    restaurant_id: string;
    username: string;
    vote: boolean;
};

type Auth = {
    token: string;
    user_id: string;
    name: string;
    username: string;
};

type Room = {
    room_id: string;
    created_by: string;
    created_by_username: string;
    created_at: string;
};

type CreateRoom = {
    user_id: string;
    room_id: string;
};
