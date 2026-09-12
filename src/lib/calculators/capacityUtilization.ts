export interface CapacityUtilizationInputs {
  unitsAvailable: number; // e.g. boats, bikes, rooms
  availableHoursPerUnitPerWeek: number;
  bookedHoursPerWeek: number; // total across all units
}

export interface CapacityUtilizationResult {
  totalAvailableHours: number;
  utilizationPercent: number;
}

export function calculateCapacityUtilization(
  inputs: CapacityUtilizationInputs,
): CapacityUtilizationResult {
  const totalAvailableHours = inputs.unitsAvailable * inputs.availableHoursPerUnitPerWeek;
  const utilizationPercent =
    totalAvailableHours > 0 ? (inputs.bookedHoursPerWeek / totalAvailableHours) * 100 : 0;
  return { totalAvailableHours, utilizationPercent };
}
