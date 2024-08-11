export type IUser = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: number;
        lng: number;
      };
    };
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
  };

  export type AsyncDataRequestStatus = 'idle' | 'pending' | 'success' | 'error'
