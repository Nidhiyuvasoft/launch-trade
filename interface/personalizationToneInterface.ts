export interface Industry {
    id: number;
    name: string;
  }
  
  export interface CustomTone {
    id: number;
    name: string;
  }
  
  export interface PersonalizationTone {
    id: number;
    name: string;
    custom_tones: CustomTone[];
  }
  
  export interface PersonalizationToneInterface {
    industries: Industry[];
    personalization_tones: PersonalizationTone[];
    status_code: number;
  }
   