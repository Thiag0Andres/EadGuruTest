export interface PropsShadowCore {
  level0: PropsStylesShadowCore;
  level1: PropsStylesShadowCore;
  level2: PropsStylesShadowCore;
  level3: PropsStylesShadowCore;
  level4: PropsStylesShadowCore;
  level5: PropsStylesShadowCore;
  safe1: PropsStylesShadowCore;
  safe2: PropsStylesShadowCore;
}

export interface PropsStylesShadowCore {
  level: string;
  opacity: number;
  elevation: number;
}

export type PropsTokensShadowCore =
  | 'level0'
  | 'level1'
  | 'level2'
  | 'level3'
  | 'level4'
  | 'level5'
  | 'safe1'
  | 'safe2';
