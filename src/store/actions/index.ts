export type Action = {
  type: string;
  payload: string;
};

type objCheckbox = {
  name: string;
  checked: boolean;
};

type stateObj = {
  filterArr: objCheckbox[];
  btnActive: boolean;
  btnName: string[];
};

export type State = {
  arrayFilter: stateObj;
};

export type SecondState = {
  activeButton: string;
};

export type TicketType = {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    }
  ];
};

type stateNetObj = {
  sessionId: string;
  error: boolean;
  loading: boolean;
  ticketsArr: TicketType[];
};

export type NetworkState = {
  network: stateNetObj;
};
