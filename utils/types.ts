export interface IfInfoType {
  id: string;
  label: string;
  value: string;
}

// export interface IfModelType {
//   id: string;
//   resource_id: string;
//   title: string;
//   detail: string;
//   full_name: string;
//   image: string;
//   sub_category: string;
//   description: string;
//   application?: string[];
//   general_specs: any[];
//   appearance: string[];
//   accessories: string[];
//   services: string[];
//   technical_specs: { id: string; label: string; value: string }[];
//   machine_id?: string;
// }

export interface IfModelType {
  id: string | number;
  resource_id?: string;
  title: string;
  detail?: string;
  full_name?: string;
  image?: string;
  sub_category?: string;
  menu_note?: string;
  description?: string;
  functions?: string[];
  application?: string[]; // 👈 حتما علامت سوال (?) بگذارید تا undefined را بپذیرد
  general_specs?: any[];
  technical_specs?: any[];
  appearance?: any[];
  info?: {
    id: string;
    label: string;
    value: string;
  }[];
  [key: string]: any; // 👈 این خط را برای انعطاف‌پذیری سایر فیلدهای دیتای ماشین‌ها اضافه کنید
}

export interface IfResourceType {
  id: string;
  title: string;
  downloads: { label: string; link: string }[];
}

// export interface IfMachineType {
//   id: number | string; // 👈 قبلاً فقط string بود، به این تغییر دهید
//   farsi: string;
//   category: string;
//   category_title: string;
//   main_image: string;
//   brand: string;
//   general_description: string[];
//   resources: IfResourceType[];
//   models: IfModelType[];
//   machine_id?: string;
//   application?: string[]; // 👈 علامت سوال اضافه شد (چون در برخی مدل‌ها وجود ندارد)
// }

export interface IfMachineType {
  id: number | string; // 👈 پشتیبانی از هر دو نوع عددی و متنی
  farsi: string;
  category: string;
  category_title: string;
  sub_menu_url: string;
  main_image: string;
  brand: string;
  general_description?: any[];
  resources?: {
    id: string;
    title: string;
    downloads: any[];
  }[];
  models: IfModelType[];
  [key: string]: any;
}
