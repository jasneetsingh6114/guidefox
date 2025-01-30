import IconWrapper from './IconWrapper';

export const DuplicateIcon = () => (
  <IconWrapper role="img" label="Duplicate item">
    <path
      d="M4.16663 12.5001C3.39006 12.5001 3.00177 12.5001 2.69549 12.3732C2.28711 12.2041 1.96265 11.8796 1.79349 11.4712C1.66663 11.1649 1.66663 10.7767 1.66663 10.0001V4.33341C1.66663 3.39999 1.66663 2.93328 1.84828 2.57676C2.00807 2.26316 2.26304 2.00819 2.57664 1.8484C2.93316 1.66675 3.39987 1.66675 4.33329 1.66675H9.99996C10.7765 1.66675 11.1648 1.66675 11.4711 1.79362C11.8795 1.96277 12.2039 2.28723 12.3731 2.69561C12.5 3.00189 12.5 3.39018 12.5 4.16675M10.1666 18.3334H15.6666C16.6 18.3334 17.0668 18.3334 17.4233 18.1518C17.7369 17.992 17.9918 17.737 18.1516 17.4234C18.3333 17.0669 18.3333 16.6002 18.3333 15.6667V10.1667C18.3333 9.23333 18.3333 8.76662 18.1516 8.4101C17.9918 8.09649 17.7369 7.84153 17.4233 7.68174C17.0668 7.50008 16.6 7.50008 15.6666 7.50008H10.1666C9.23321 7.50008 8.7665 7.50008 8.40998 7.68174C8.09637 7.84153 7.8414 8.09649 7.68162 8.4101C7.49996 8.76662 7.49996 9.23333 7.49996 10.1667V15.6667C7.49996 16.6002 7.49996 17.0669 7.68162 17.4234C7.8414 17.737 8.09637 17.992 8.40998 18.1518C8.7665 18.3334 9.23321 18.3334 10.1666 18.3334Z"
      stroke="var(--second-text-color)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

export const TrashIcon = ({ stroke }) => (
  <IconWrapper role="img" aria-label="Delete item">
    <path
      d="M13.3333 4.99996V4.33329C13.3333 3.39987 13.3333 2.93316 13.1517 2.57664C12.9919 2.26304 12.7369 2.00807 12.4233 1.84828C12.0668 1.66663 11.6001 1.66663 10.6667 1.66663H9.33333C8.39991 1.66663 7.9332 1.66663 7.57668 1.84828C7.26308 2.00807 7.00811 2.26304 6.84832 2.57664C6.66667 2.93316 6.66667 3.39987 6.66667 4.33329V4.99996M8.33333 9.58329V13.75M11.6667 9.58329V13.75M2.5 4.99996H17.5M15.8333 4.99996V14.3333C15.8333 15.7334 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8211 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8211 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7334 4.16667 14.3333V4.99996"
      stroke={stroke || 'var(--border-error-solid)'}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

export const EditIcon = () => (
  <IconWrapper role="img" label="Edit item">
    <path
      d="M2.39686 15.0964C2.43515 14.7518 2.45429 14.5795 2.50642 14.4185C2.55268 14.2756 2.61802 14.1397 2.70069 14.0143C2.79388 13.873 2.91645 13.7504 3.1616 13.5053L14.1669 2.50005C15.0873 1.57957 16.5797 1.57957 17.5002 2.50005C18.4207 3.42052 18.4207 4.91291 17.5002 5.83338L6.49493 16.8386C6.24978 17.0838 6.12721 17.2063 5.9859 17.2995C5.86054 17.3822 5.72457 17.4475 5.5817 17.4938C5.42067 17.5459 5.24838 17.5651 4.9038 17.6033L2.0835 17.9167L2.39686 15.0964Z"
      stroke="var(--second-text-color)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

export const Hamburger = ({ styles }) => (
  <IconWrapper style={styles} role="img" aria-label="Drag handle">
    <path
      d="M12.5259 5.33333H1.78906M12.5259 14H1.78906M12.5259 1H1.78906M12.5259 9.66667H1.78906"
      stroke="#98A2B3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);
