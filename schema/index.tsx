export type TIndustry =
    | "IT" //INFORMATION TECHNOLOGY INDUSTRY - NGÀNH CÔNG NGHỆ THÔNG TIN
    | "ISystem" //INFORMATION SYSTEMS INDUSTRY - NGÀNH HỆ THỐNG THÔNG TIN
    | "CS" //COMPUTER SCIENCE SECTOR - NGÀNH KHOA HỌC MÁY TÍNH
    | "SE" //SOFTWARE ENGINEERING INDUSTRY - NGÀNH KỸ THUẬT PHẦN MỀM
    | "CE" //COMPUTER ENGINEERING SECTOR - NGÀNH KỸ THUẬT MÁY TÍNH
    | "Network" //COMPUTER NETWORK & DATA COMMUNICATION INDUSTRY - NGÀNH MẠNG MÁY TÍNH & TRUYỀN THÔNG DỮ LIỆU
    | "ISecurity" // INFORMATION SECURITY INDUSTRY - NGÀNH AN TOÀN THÔNG TIN
    | "ECommerce" //E - COMMERCE INDUSTRY - NGÀNH THƯƠNG MẠI ĐIỆN TỬ
    | "DA" //DATA SCIENCE SECTOR - NGÀNH KHOA HỌC DỮ LIỆU
    | "AI" //ARTIFICIAL INTELLIGENCE INDUSTRY - NGÀNH TRÍ TUỆ NHÂN TẠO
    | "IC"; //ICchip DESIGN INDUSTRY - NGÀNH THIẾT KẾ VI MẠCH

export const INDUSTRY: Record<TIndustry, string> = {
    IT: "INFORMATION TECHNOLOGY INDUSTRY",
    ISystem: "INFORMATION SYSTEMS INDUSTRY",
    CS: "COMPUTER SCIENCE SECTOR",
    SE: "SOFTWARE ENGINEERING INDUSTRY",
    CE: "COMPUTER ENGINEERING SECTOR",
    Network: "COMPUTER NETWORK & DATA COMMUNICATION INDUSTRY",
    ISecurity: "INFORMATION SECURITY INDUSTRY",
    ECommerce: "E - COMMERCE INDUSTRY",
    DA: "DATA SCIENCE SECTOR",
    AI: "ARTIFICIAL INTELLIGENCE INDUSTRY",
    IC: "ICchip DESIGN INDUSTRY",
};

export interface IIndustry {
    key: TIndustry;
    name: (typeof INDUSTRY)[keyof typeof INDUSTRY];
}

export interface IUser {
    username: string;
    posts: IPostItem[];
}

export interface ISubject {
    name: string;
    industry: IIndustry;
    createdBy: IUser;
    posts: IPostItem[];
}

export interface IComment {
    content: string;
    user: IUser;
    updated: boolean; //default = false
    createdAt: Date;
    updatedAt: Date;
}

export interface IPostItem {
    industry: IIndustry;
    subject: ISubject;
    description: string;
    thumbnail: string;
    reader: number;
    rating: number;
    comments: IComment[];
    owner: IUser;
}
