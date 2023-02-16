declare module "material-ui-popup-state" {
  import React from "react";

  type Maybe<T> = T | null | undefined;

  export type Variant = "popover" | "popper";

  export interface InjectedProps {
    open: (
      eventOrAnchorEl: React.SyntheticEvent<unknown> | HTMLElement
    ) => void;
    close: () => void;
    toggle: (
      eventOrAnchorEl: React.SyntheticEvent<unknown> | HTMLElement
    ) => void;
    onMouseLeave: (event: React.SyntheticEvent<unknown>) => void;
    setOpen: (
      open: boolean,
      eventOrAnchorEl?: React.SyntheticEvent<unknown> | HTMLElement
    ) => void;
    isOpen: boolean;
    anchorEl: Maybe<HTMLElement>;
    popupId: Maybe<string>;
    variant: Variant;
  }

  export function bindMenu(state: InjectedProps): {
    id?: string;
    anchorEl: Maybe<HTMLElement>;
    open: boolean;
    onClose: () => void;
    onMouseLeave: (event: React.SyntheticEvent<unknown>) => void;
  };

  export function bindTrigger(state: InjectedProps): {
    "aria-owns"?: string;
    "aria-describedby"?: string;
    "aria-haspopup": true;
    onClick: (event: React.SyntheticEvent<any>) => void;
  };

  export interface PopupStateProps {
    popupId?: string;
    children: (state: InjectedProps) => React.ReactNode;
    parentPopupState?: Maybe<InjectedProps>;
    variant: "popover" | "popper";
  }

  export default class PopupState extends React.Component<PopupStateProps> {}
}
