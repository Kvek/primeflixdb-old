import { VERY_DARK_BLUE } from 'theme';

const Moon = (): JSX.Element => (
  <svg fill="none" viewBox="0 0 15 15">
    <title>Click to toggle dark mode</title>
    <path
      d="m4.64286 0c-2.94849 1.09269-4.64286 3.93239-4.64286 7.26098 0 4.27412 3.46488 7.73902 7.73901 7.73902 3.32859 0 6.16829-1.6944 7.26099-4.6429-.8814.3545-1.8433.5358-2.8515.5358-4.22447 0-8.04136-3.81692-8.04136-8.04138 0-1.00826.18124-1.970092.53572-2.85152z"
      fill={VERY_DARK_BLUE}
    />
  </svg>
);
export default Moon;
