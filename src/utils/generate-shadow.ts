interface ConfigParams {
  color?: string;
  shadowWidth?: number;
  shadowOpacity?: number;
}

export const generateShadow = (elevation: number, config?: ConfigParams) => {
  return {
    elevation,
    shadowColor: config?.color || 'black',
    shadowOffset: {width: config?.shadowWidth || 0, height: elevation - 1},
    shadowOpacity: config?.shadowOpacity || 0.24,
    shadowRadius: elevation,
  } as const;
};
