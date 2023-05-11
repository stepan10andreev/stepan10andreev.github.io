import React from 'react';
import styles from './icon.css';
import { AddBtnIcon, ClockIcon, DecreaseMenuIcon, DeleteMenuIcon, EditMenuIcon, EqualizerIcon, FocusIcon, IncreaseMenuIcon, LogoIcon, StopIcon } from './Icons';
import { TomatoIcon } from './Icons/TomatoIcon';


type TSizes = 130 | 115 | 50 | 40 | 24 | 14;

let iconList = {
  LogoIcon: <LogoIcon />,
  AddBtnIcon: <AddBtnIcon />,
  EqualizerIcon: <EqualizerIcon />,
  TomatoIcon: <TomatoIcon />,
  FocusIcon: <FocusIcon />,
  ClockIcon: <ClockIcon />,
  StopIcon: <StopIcon />,
  IncreaseMenuIcon: <IncreaseMenuIcon />,
  DecreaseMenuIcon: <DecreaseMenuIcon />,
  EditMenuIcon: <EditMenuIcon />,
  DeleteMenuIcon: <DeleteMenuIcon />
};

export enum EIcons {
  logo = 'LogoIcon',
  addBtn = `AddBtnIcon`,
  equalizer = `EqualizerIcon`,
  tomato = `TomatoIcon`,
  focus = `FocusIcon`,
  clock = `ClockIcon`,
  stop = `StopIcon`,
  increase = 'IncreaseMenuIcon',
  decrease = 'DecreaseMenuIcon',
  edit = 'EditMenuIcon',
  delete = 'DeleteMenuIcon'
}

interface IIconProps {
  name: EIcons;
  size?: TSizes;
}



export function Icon({ name, size }: IIconProps) {
  return (
    <div className={styles[`icon-${size}`]}>
      {iconList[name]}
    </div>
  );
}

