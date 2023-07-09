/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import AuthAppleIcon from './auth_apple.png';
import AuthGithubIcon from './auth_github.png';
import AuthGoogleIcon from './auth_google.png';
import IosShareIcon from './ios_share.png';

export {
  AuthAppleIcon,
  AuthGithubIcon,
  AuthGoogleIcon,
  IosShareIcon,
};

export const ArrowBackBold = (props) => (
  <SvgIcon {...props} viewBox="0 -960 960 960">
    <path d="M480-149 149-480l331-331 67 66-217 218h481v94H330l217 217-67 67Z" />
  </SvgIcon>
);

export const Check = (props) => (
  <SvgIcon {...props} viewBox="0 -960 960 960">
    <path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z" />
  </SvgIcon>
);

export const CloseBold = (props) => (
  <SvgIcon {...props} viewBox="0 -960 960 960">
    <path d="m249-183-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z" />
  </SvgIcon>
);

export const ContentCopy = (props) => (
  <SvgIcon {...props} viewBox="0 -960 960 960">
    <path d="M180-81q-24 0-42-18t-18-42v-603h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560Zm0 0v-560 560Z" />
  </SvgIcon>
);

export const PlayArrow = (props) => (
  <SvgIcon {...props} viewBox="0 -960 960 960">
    <path d="M320-203v-560l440 280-440 280Z" />
  </SvgIcon>
);

export const Pause = (props) => (
  <SvgIcon {...props} viewBox="0 -960 960 960">
    <path d="M555-200v-560h175v560H555Zm-325 0v-560h175v560H230Z" />
  </SvgIcon>
);

export const Forward10 = (props) => (
  <SvgIcon {...props} viewBox="0 -960 960 960">
    <path d="M360-310v-212h-54v-49h104v261h-50Zm147 0q-18.7 0-31.35-12.65Q463-335.3 463-354v-173q0-18.7 12.65-31.35Q488.3-571 507-571h83q18.7 0 31.35 12.65Q634-545.7 634-527v173q0 18.7-12.65 31.35Q608.7-310 590-310h-83Zm6-50h71v-162h-71v162ZM480-80q-75 0-140.5-28T225-185q-49-49-77-114.5T120-440q0-75 28-140.5T225-695q49-49 114.5-77T480-800h21l-78-78 41-41 147 147-147 147-41-41 74-74h-17q-125.36 0-212.68 87.32Q180-565.36 180-440t87.32 212.68Q354.64-140 480-140t212.68-87.32Q780-314.64 780-440h60q0 75-28 140.5T735-185q-49 49-114.5 77T480-80Z" />
  </SvgIcon>
);

export const Replay10 = (props) => (
  <SvgIcon {...props} viewBox="0 -960 960 960">
    <path d="M480-80q-75 0-140.5-28T225-185q-49-49-77-114.5T120-440h60q0 125 87.32 212.5T480-140t212.68-87.32Q780-314.64 780-440t-85-212.68Q610-740 485-740h-22l73 73-42 42-147-147 147-147 41 41-78 78h23q75 0 140.5 28T735-695q49 49 77 114.5T840-440q0 75-28 140.5T735-185q-49 49-114.5 77T480-80ZM360-310v-212h-54v-49h104v261h-50Zm147 0q-18.7 0-31.35-12.65Q463-335.3 463-354v-173q0-18.7 12.65-31.35Q488.3-571 507-571h83q18.7 0 31.35 12.65Q634-545.7 634-527v173q0 18.7-12.65 31.35Q608.7-310 590-310h-83Zm6-50h71v-162h-71v162Z" />
  </SvgIcon>
);

export const ErrorOutline = (props) => (
  <SvgIcon {...props} viewBox="0 -960 960 960">
    <path d="M480-280q14 0 24-9 9-10 9-24t-9-23q-10-10-24-10t-23 9q-10 10-10 24t9 23q10 10 24 10Zm-27-153h60v-253h-60v253Zm27 353q-82 0-155-31t-127-86q-55-55-86-128-32-73-32-155 0-83 32-156 31-73 86-127t127-85q73-32 156-32 82 0 155 32 73 31 127 85t86 127q31 73 31 156 0 82-31 155t-86 127q-54 55-127 86-73 32-156 32Zm1-60q141 0 240-99t99-241q0-142-99-241t-241-99q-141 0-240 99-100 99-100 241 0 141 100 241t241 99Zm-1-340Z" />
  </SvgIcon>
);

export const InfoOutline = (props) => (
  <SvgIcon {...props} viewBox="0 -960 960 960">
    <path d="M453-280h60v-240h-60v240Zm27-314q14 0 23-9t10-23q0-14-9-24-10-10-24-10t-23 10-10 24q0 14 9 23 10 9 24 9Zm0 514q-82 0-155-31t-128-86q-54-55-86-128-31-73-31-155 0-83 32-156 31-73 86-127t127-85q73-32 156-32 82 0 155 32 73 31 127 85t86 127q31 73 31 156 0 82-31 155t-86 127q-54 55-127 86-73 32-156 32Zm0-60q142 0 241-99t99-241q0-142-99-241t-241-99q-141 0-240 99-100 99-100 241 0 141 100 241t241 99Zm0-340Z" />
  </SvgIcon>
);

export const PinCarIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 5.95 8.467">
    <path
      d="M4.233 288.533c-1.373 0-2.975.84-2.975 2.975 0 1.45 2.289 4.653 2.975 5.492.61-.84 2.975-3.966 2.975-5.492 0-2.136-1.602-2.975-2.975-2.975z"
      style={{ fill: '#31a1ee', fillOpacity: 1, strokeWidth: 0.56445432 }}
      transform="translate(-1.258 -288.533)"
    />
    <path
      d="M6.238 291.337a.463.463 0 0 0-.355-.447l-.429-1a.154.154 0 0 0-.141-.095H3.154a.154.154 0 0 0-.136.086l-.434 1.006a.463.463 0 0 0-.355.45v1.08h.308v.307a.308.308 0 1 0 .617 0v-.308h2.159v.308a.308.308 0 1 0 .616 0v-.308h.309zm-2.991-1.234H5.22l.324.771H2.923Zm-.401 1.85a.308.308 0 1 1 0-.616.308.308 0 0 1 0 .616zm2.775 0a.308.308 0 1 1 0-.616.308.308 0 0 1 0 .616z"
      style={{ fill: '#fff', strokeWidth: 0.30835694 }}
      transform="translate(-1.258 -288.533)"
    />
  </SvgIcon>
);

export const PinMarkerIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 5.95 8.467">
    <path
      d="M4.233 288.533c-1.373 0-2.975.84-2.975 2.975 0 1.45 2.289 4.653 2.975 5.492.61-.84 2.975-3.966 2.975-5.492 0-2.136-1.602-2.975-2.975-2.975z"
      style={{ fill: '#31a1ee', fillOpacity: 1, strokeWidth: 0.56445432 }}
      transform="translate(-1.258 -288.533)"
    />
    <path
      d="M5.62 291.43a1.387 1.387 0 1 1-2.774 0 1.387 1.387 0 0 1 2.774 0z"
      style={{ fill: '#fff', strokeWidth: 0.21338436 }}
      transform="translate(-1.258 -288.533)"
    />
  </SvgIcon>
);

export const PinHomeIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 5.95 8.467">
    <path
      d="M4.233 288.533c-1.373 0-2.975.84-2.975 2.975 0 1.45 2.289 4.653 2.975 5.492.61-.84 2.975-3.966 2.975-5.492 0-2.136-1.602-2.975-2.975-2.975z"
      style={{ fill: '#31a1ee', fillOpacity: 1, strokeWidth: 0.56445432 }}
      transform="translate(-1.258 -288.533)"
    />
    <path
      d="M2.824 292.972c0 .036.028.064.064.064h.96v-.769h.77v.77h.961a.064.064 0 0 0 .064-.065v-1.474h-2.82v1.474zm3.058-1.838-.239-.21v-.964a.256.256 0 0 0-.512 0v.513l-.85-.746a.064.064 0 0 0-.091-.003l-.003.003-1.602 1.4a.064.064 0 0 0 .045.108l.45.007h2.755a.064.064 0 0 0 .047-.107z"
      style={{ fill: '#fff', strokeWidth: 0.25640076 }}
      transform="translate(-1.258 -288.533)"
    />
  </SvgIcon>
);

export const PinWorkIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 5.95 8.467">
    <path
      d="M4.233 288.533c-1.373 0-2.975.84-2.975 2.975 0 1.45 2.289 4.653 2.975 5.492.61-.84 2.975-3.966 2.975-5.492 0-2.136-1.602-2.975-2.975-2.975z"
      style={{ fill: '#31a1ee', fillOpacity: 1, strokeWidth: 0.56445432 }}
      transform="translate(-1.258 -288.533)"
    />
    <path
      d="M2.824 292.972c0 .036.028.064.064.064h.96v-.769h.77v.77h.961a.064.064 0 0 0 .064-.065v-1.474h-2.82v1.474zm3.058-1.838-.239-.21v-.964a.256.256 0 0 0-.512 0v.513l-.85-.746a.064.064 0 0 0-.091-.003l-.003.003-1.602 1.4a.064.064 0 0 0 .045.108l.45.007h2.755a.064.064 0 0 0 .047-.107z"
      style={{ fill: '#fff', strokeWidth: 0.25640076 }}
      transform="translate(-1.258 -288.533)"
    />
  </SvgIcon>
);

export const PinPinnedIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 5.95 8.467">
    <path
      d="M4.233 288.533c-1.373 0-2.975.84-2.975 2.975 0 1.45 2.289 4.653 2.975 5.492.61-.84 2.975-3.966 2.975-5.492 0-2.136-1.602-2.975-2.975-2.975z"
      style={{ fill: '#31a1ee', fillOpacity: 1, strokeWidth: 0.56445432 }}
      transform="translate(-1.258 -288.533)"
    />
    <path
      d="m4.233 289.469-.582 1.456H2.194l1.165 1.02-.582 1.748 1.456-1.02 1.457 1.02-.583-1.748 1.166-1.02H4.816Z"
      style={{ fill: '#fff', strokeWidth: 0.29134277 }}
      transform="translate(-1.258 -288.533)"
    />
  </SvgIcon>
);

export const Video360Icon = (props) => (
  <SvgIcon {...props} viewBox="0 0 480 480">
    <g style={{ fill: '#fff' }}>
      <path
        d="M391.502 210.725c-5.311-1.52-10.846 1.555-12.364 6.865-1.519 5.31 1.555 10.846 6.864 12.364C431.646 243.008 460 261.942 460 279.367c0 12.752-15.51 26.749-42.552 38.402-29.752 12.82-71.958 22.2-118.891 26.425l-40.963-.555-.139-.001c-5.46 0-9.922 4.389-9.996 9.865-.075 5.522 4.342 10.06 9.863 10.134l41.479.562.136.001c.297 0 .593-.013.888-.039 49.196-4.386 93.779-14.339 125.538-28.024C470.521 316.676 480 294.524 480 279.367c0-27.943-31.43-52.321-88.498-68.642zM96.879 199.333c-5.522 0-10 4.477-10 10s4.478 10 10 10H138v41.333H96.879c-5.522 0-10 4.477-10 10s4.478 10 10 10H148c5.523 0 10-4.477 10-10V148c0-5.523-4.477-10-10-10H96.879c-5.522 0-10 4.477-10 10s4.478 10 10 10H138v41.333H96.879zM188.879 280.667h61.334c5.522 0 10-4.477 10-10v-61.333c0-5.523-4.477-10-10-10h-51.334V158H240c5.523 0 10-4.477 10-10s-4.477-10-10-10h-51.121c-5.523 0-10 4.477-10 10v122.667c0 5.523 4.477 10 10 10zm10-61.334h41.334v41.333h-41.334v-41.333z"
        style={{ fill: '#fff' }}
      />
      <path
        d="M291.121 280.667h61.334c5.522 0 10-4.477 10-10V148c0-5.523-4.478-10-10-10h-61.334c-5.522 0-10 4.477-10 10v122.667c0 5.523 4.478 10 10 10zm10-122.667h41.334v102.667h-41.334V158zM182.857 305.537c-3.567-4.216-9.877-4.743-14.093-1.176-4.217 3.567-4.743 9.876-1.177 14.093l22.366 26.44c-47.196-3.599-89.941-12.249-121.37-24.65C37.708 308.06 20 293.162 20 279.367c0-16.018 23.736-33.28 63.493-46.176 5.254-1.704 8.131-7.344 6.427-12.598-1.703-5.253-7.345-8.13-12.597-6.427-23.129 7.502-41.47 16.427-54.515 26.526C7.674 252.412 0 265.423 0 279.367c0 23.104 21.178 43.671 61.242 59.48 32.564 12.849 76.227 21.869 124.226 25.758l-19.944 22.104c-3.7 4.1-3.376 10.424.725 14.123a9.96 9.96 0 0 0 6.696 2.576 9.975 9.975 0 0 0 7.427-3.301l36.387-40.325a9.999 9.999 0 0 0 2.576-6.699v-.764a9.999 9.999 0 0 0-2.365-6.458l-34.113-40.324zM381.414 137.486h40.879c5.522 0 10-4.477 10-10V86.592c0-5.523-4.478-10-10-10h-40.879c-5.522 0-10 4.477-10 10v40.894c0 5.523 4.478 10 10 10zm10-40.894h20.879v20.894h-20.879V96.592z"
        style={{ fill: '#fff' }}
      />
    </g>
  </SvgIcon>
);

export const AccountIcon = (props) => (
  <SvgIcon {...props}>
    <g transform="translate(-198.000000, -189.000000)">
      <path d="M210,189 C203.381053,189 198,194.381053 198,201 C198,207.618947 203.381053,213 210,213 C216.618947,213 222,207.618947 222,201 C222,194.381053 216.618947,189 210,189 Z M216.724916,207.352941 C216.374763,206.716762 215.824522,206.182371 215.099204,205.902453 L212.623121,204.808224 C211.972836,204.553753 211.522639,203.917573 211.472617,203.205053 L211.422595,202.747004 C212.573099,201.856353 213.348438,200.125945 213.348438,198.293749 C213.348438,195.647243 211.697716,193.815047 209.671829,193.815047 C207.645942,193.815047 205.99522,195.647243 205.99522,198.293749 C205.99522,200.125945 206.770559,201.830905 207.921063,202.747004 L207.871041,203.205053 C207.821019,203.917573 207.370822,204.528305 206.720537,204.808224 L204.244453,205.902453 C203.544147,206.182371 202.968895,206.716762 202.618742,207.352941 C201.068063,205.622534 200.117647,203.332288 200.117647,200.813019 C200.117647,195.469113 204.394519,191.117647 209.646818,191.117647 C214.899117,191.117647 219.175989,195.469113 219.175989,200.813019 C219.201,203.332288 218.250584,205.622534 216.724916,207.352941 Z" />
    </g>
  </SvgIcon>
);

export const CommaIcon = (props) => (
  <SvgIcon {...props}>
    <g transform="scale(0.35, 0.35)">
      <path d="M2.3325273,44 C2.3325273,42.9819019 2.25294268,42.1290181 2.37000751,41.3070321 C2.41990001,40.9564305 2.82901847,40.5810595 3.16268975,40.3693706 C4.78942848,39.3369727 6.55659633,38.5126886 8.07113779,37.32861 C12.9769087,33.4931864 15.8847893,28.4440632 16.0437152,21.8852845 C16.0887401,20.0229846 15.4041177,19.5577289 13.8399272,20.2831908 C9.32477801,22.3776079 4.46938637,21.1496084 1.87814052,17.2574961 C-0.947721751,13.012484 -0.549798677,7.36046894 2.83607643,3.65221184 C7.16090397,-1.08410221 14.2770341,-1.22582393 19.1842653,3.29752453 C22.1237851,6.00709044 23.5205316,9.50570155 23.8688055,13.4851451 C25.0365333,26.8169447 18.349722,37.8056121 6.17936039,42.6328324 C4.97488253,43.1103451 3.73973905,43.5025696 2.3325273,44" />
    </g>
  </SvgIcon>
);

function chevronPath(rotation = 270) {
  return (
    <path
      transform={`rotate(${rotation}, 12.3, 12)`}
      d="M16.8625817,0.35528597 C16.3546389,-0.125475313 15.550396,-0.125475313 15.0847818,0.398991541 L5.3492107,11.1068565 C4.88359643,11.6313233 4.88359643,12.4180236 5.3492107,12.8987849 L15.0847818,23.6066499 C15.3387532,23.8688833 15.6773817,24 16.0160103,24 C16.3123103,24 16.6509389,23.8688833 16.9049103,23.6503554 C17.4128531,23.1695941 17.4551817,22.3391883 16.9472388,21.8147214 L7.97358203,12.0246735 L16.9049103,2.19091996 C17.3705245,1.66645311 17.3705245,0.836047253 16.8625817,0.35528597 Z"
    />
  );
}

export const ChevronIcon = (props) => (
  <SvgIcon {...props}>
    { chevronPath(270) }
  </SvgIcon>
);
export const DownArrow = ChevronIcon;

export const UpArrow = (props) => (
  <SvgIcon {...props}>
    { chevronPath(90) }
  </SvgIcon>
);

export const RightArrow = (props) => (
  <SvgIcon {...props}>
    { chevronPath(180) }
  </SvgIcon>
);
