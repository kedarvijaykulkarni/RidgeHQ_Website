export interface InstructorUtilizationInputs {
  instructorCount: number;
  availableHoursPerWeek: number; // per instructor
  bookedHoursPerWeek: number; // total across all instructors
}

export interface InstructorUtilizationResult {
  totalAvailableHours: number;
  utilizationPercent: number;
}

export function calculateInstructorUtilization(
  inputs: InstructorUtilizationInputs,
): InstructorUtilizationResult {
  const totalAvailableHours = inputs.instructorCount * inputs.availableHoursPerWeek;
  const utilizationPercent =
    totalAvailableHours > 0 ? (inputs.bookedHoursPerWeek / totalAvailableHours) * 100 : 0;
  return { totalAvailableHours, utilizationPercent };
}
