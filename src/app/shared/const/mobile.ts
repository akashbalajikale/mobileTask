import { imobile } from "../models/mobile";

export let mobileProducts: Array<imobile> = [
  {
    id: 1,
    name: 'iPhone 13',
    brand: 'Apple',
    price: 999,
    image: 'https://i.insider.com/6116b065c040ad0018ce3ea1?width=1009&format=jpeg',
    isAvailable: true,
    rating: 4.9,
    noOfItems: 50,
    features: [
      'A15 Bionic chip',
      'Super Retina XDR display',
      'Dual 12MP camera system',
      'Ceramic Shield front cover',
      '5G capable'
    ]
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    brand: 'Samsung',
    price: 899,
    image: '',
    isAvailable: false,
    rating: 4.5,
    noOfItems: 20,
    features: [
      'Exynos 2100/Snapdragon 888 processor',
      'Dynamic AMOLED 2X display',
      'Triple camera setup (64MP main)',
      '8K video recording',
      '5G capable'
    ]
  },
  {
    id: 3,
    name: 'Google Pixel 6',
    brand: 'Google',
    price: 799,
    image: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios16-iphone13-pro-widgets-home-screen.png',
    isAvailable: false,
    rating: 3.9,
    noOfItems: 10,
    features: [
      'Google Tensor processor',
      'Pixel Neural Core',
      'Dual rear cameras (50MP main)',
      '6.4" OLED display',
      'IP68 water and dust resistance'
    ]
  },
  {
    id: 4,
    name: 'OnePlus 9 Pro',
    brand: 'OnePlus',
    price: 899,
    image: '',
    isAvailable: true,
    rating: 2.9,
    noOfItems: 7,
    features: [
      'Snapdragon 888 processor',
      '120Hz Fluid AMOLED display',
      'Hasselblad Quad Camera',
      '65W Warp Charge',
      '5G connectivity'
    ]
  },
  {
    id: 5,
    name: 'Xiaomi Mi 11',
    brand: 'Xiaomi',
    price: 699,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
    isAvailable: true,
    rating: 4.8,
    noOfItems: 5,
    features: [
      'Snapdragon 888 processor',
      '120Hz AMOLED display',
      '108MP triple camera',
      '55W fast charging',
      'Harman Kardon stereo speakers'
    ]
  },
  {
    id: 6,
    name: 'Sony Xperia 1 III',
    brand: 'Sony',
    price: 1199,
    image: '',
    isAvailable: true,
    rating: 2.5,
    noOfItems: 100,
    features: [
      'Snapdragon 888 processor',
      '4K HDR OLED 120Hz display',
      'Triple 12MP cameras',
      '360 Reality Audio',
      '5G connectivity'
    ]
  },
  {
    id: 7,
    name: 'LG Velvet',
    brand: 'LG',
    price: 599,
    image: '',
    isAvailable: false,
    rating: 1.5,
    noOfItems: 2,
    features: [
      'Snapdragon 765G processor',
      '6.8" P-OLED display',
      'Triple rear cameras (48MP main)',
      'Water and dust resistance (IP68)',
      '5G connectivity'
    ]
  },
  {
    id: 8,
    name: 'Huawei P40 Pro',
    brand: 'Huawei',
    price: 899,
    image: '',
    isAvailable: true,
    rating: 3.5,
    noOfItems: 45,
    features: [
      'Kirin 990 5G processor',
      '6.58" OLED display',
      'Quad Leica Camera (50MP main)',
      '40W fast charging',
      '5G support'
    ]
  },
  {
    id: 9,
    name: 'Motorola Moto G Power',
    brand: 'Motorola',
    price: 249,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
    isAvailable: true,
    rating: 4.5,
    noOfItems: 500,
    features: [
      'Snapdragon 662 processor',
      '6.6" IPS LCD display',
      'Triple camera setup (48MP main)',
      '5000mAh battery',
      'Water-repellent design'
    ]
  },
  {
    id: 10,
    name: 'Nokia 8.3',
    brand: 'Nokia',
    price: 499,
    image: '',
    isAvailable: true,
    rating: 4.5,
    noOfItems: 8,
    features: [
      'Snapdragon 765G processor',
      '6.81" PureDisplay',
      'Quad camera system (64MP main)',
      'ZEISS optics',
      '5G support'
    ]
  }
];
