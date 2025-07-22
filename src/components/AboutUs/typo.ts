export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface FeatureCardProps {
  icon: string; 
  title: string;
  description: string;
  lineColor: 'gold' | 'darkGold'; 
}

export interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  backgroundImage: string;
  buildingImage: string;
}

export interface AboutUsSectionProps {
  title: string;
  mainDescription: string;
  featureCards: FeatureCardProps[];
}
