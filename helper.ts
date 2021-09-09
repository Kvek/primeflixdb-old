/**
 *
 * @param handler
 */
export const toggleUpdaterHelper = (
  handler: (valOrUpdater: boolean | ((currVal: boolean) => boolean)) => void
) => handler((currVal) => !currVal);
