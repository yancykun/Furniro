import {
  dining,
  living,
  bedroom,
  kitchen,
  workplace,
  inspiration1,
  inspiration2,
  inspiration3,
  inspiration4,
  trophy,
  guarantee,
  shipping,
  support,
  location,
  phone,
  clock,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Shop",
    url: "/shop",
  },
  {
    id: "2",
    title: "Categories",
    url: "/categories",
  },
  {
    id: "3",
    title: "Contact",
    url: "/contact",
  },
];

export const categories = [
  {
    id: "0",
    title: "Dining room",
    image: dining,
    category: "dining",
    url: "/categories/dining",
  },
  {
    id: "1",
    title: "Living room",
    image: living,
    category: "living",
    url: "/categories/living",
  },
  {
    id: "2",
    title: "Bedroom",
    image: bedroom,
    category: "bedroom",
    url: "/categories/bedroom",
  },
  {
    id: "3",
    title: "Kitchen",
    image: kitchen,
    category: "kitchen",
    url: "/categories/kitchen",
  },
  {
    id: "4",
    title: "Workplace",
    image: workplace,
    category: "workplace",
    url: "/categories/workplace",
  },
];

export const inspiration = [
  {
    id: 0,
    image: inspiration1,
  },
  {
    id: 1,
    image: inspiration2,
  },
  {
    id: 3,
    image: inspiration3,
  },
  {
    id: 4,
    image: inspiration4,
  },
];

export const help = [
  {
    id: 0,
    title: "Payment Options",
    url: "/billing",
  },
  {
    id: 1,
    title: "Returns",
    url: "#return",
  },
  {
    id: 2,
    title: "Privacy Policies",
    url: "#privacy",
  },
];

export const features = [
  {
    id: 0,
    icon: trophy,
    title: "High Quality",
    text: "crafted from top materials",
  },
  {
    id: 1,
    icon: guarantee,
    title: "Warranty Protection",
    text: "Over 2 years",
  },
  {
    id: 2,
    icon: shipping,
    title: "Free Shipping",
    text: "Order over 150 $",
  },
  {
    id: 3,
    icon: support,
    title: "24/7 Support",
    text: "Dedicated Support",
  },
];

export const contactDetails = [
  {
    id: 0,
    image: location,
    title: "Address",
    text: "236 5th SE Avenue, New York NY10000, United States",
  },
  {
    id: 1,
    image: phone,
    title: "Phone",
    mobile: "Mobile: +(84) 546-6789",
    hotline: "Hotline: +(84) 456-6789",
  },
  {
    id: 2,
    image: clock,
    title: "Working Time",
    weekdays: "Monday-Friday: 9:00 - 22:00",
    weekends: "Saturday-Sunday: 9:00 - 21:00",
  },
];
