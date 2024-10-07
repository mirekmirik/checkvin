export type ServiceCard = {
  imgSrc: string;
  altText: string;
  title: string;
  price: string;
  buttonText: string;
  link: string;
};

export type NavItem = {
  name: string;
  link: string;
};

export type FeatureCard = {
  logo: () => JSX.Element;
  title: string;
  description: string;
};

export type Routes = Record<string, string>;
