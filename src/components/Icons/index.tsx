import React, { ReactElement } from 'react'

const DiscordIcon = ({ ...props }: React.SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <path
        d="M19.6127 22.8552V22.8433C18.2348 22.8433 17.1229 23.9824 17.1229 25.3823C17.1229 26.7823 18.2348 27.9214 19.6127 27.9214C20.9905 27.9214 22.1025 26.7824 22.1025 25.3942C22.1025 23.9941 20.9784 22.8552 19.6127 22.8552Z"
        fill={props.fill ? props.fill : '#FFF'}
      />
      <path
        d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM30.6596 33.4976C30.6596 33.4976 29.7528 32.4888 29.1004 31.5992C32.2428 30.7094 33.4276 28.9298 33.4276 28.9298C30.1603 30.9499 27.1089 31.7271 24 31.6261C20.8911 31.7269 17.8397 30.9499 14.5728 28.9298C14.5728 28.9298 15.7572 30.7094 18.9 31.5992C18.2473 32.4891 17.3409 33.4976 17.3409 33.4976C11.95 33.3789 9.8592 30.0806 9.73824 30.223C9.73824 22.879 13.3037 16.8991 13.3037 16.8991C16.4944 14.6095 19.4677 14.5143 20.0357 14.5024L20.3983 14.8465C16.3252 15.9855 14.3552 17.7652 14.3552 17.7652C17.851 16.0767 21.1458 15.4828 24 15.4472C26.8542 15.4832 30.1488 16.0767 33.6448 17.7652C33.6448 17.7652 31.6748 15.9855 27.6017 14.8465L27.9643 14.5024C28.5324 14.5143 31.5056 14.6092 34.6963 16.8991C34.6963 16.8991 38.2617 22.8788 38.2617 30.223C38.1408 30.0806 36.05 33.3789 30.6596 33.4976Z"
        fill={props.fill ? props.fill : '#FFF'}
      />
      <path
        d="M28.3873 22.8432V22.8551C27.0216 22.8551 25.8975 23.9941 25.8975 25.3941C25.8975 26.7822 27.0095 27.9213 28.3873 27.9213C29.7651 27.9213 30.8771 26.7822 30.8771 25.3822C30.8771 23.9821 29.7652 22.8432 28.3873 22.8432Z"
        fill={props.fill ? props.fill : '#FFF'}
      />
    </svg>
  )
}

const EtherscanIcon = ({ ...props }: React.SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <path
        d="M11.3031 34.1648C11.2362 34.1779 11.1692 34.1911 11.1019 34.2005C10.2401 34.322 9.61378 34.3107 9.10397 34.1078C7.14489 31.2255 6 27.747 6 24.0005C6 14.0598 14.058 6.00049 24 6.00049C32.2322 6.00049 39.1741 11.527 41.3148 19.074C41.2747 19.4999 41.1182 19.9107 40.8414 20.2878C39.1942 22.5299 37.1086 24.3212 34.909 25.9921C34.6221 26.2101 34.4994 26.1099 34.4956 25.7792L34.4956 25.7754C34.4943 25.6088 34.4931 25.4435 34.4931 25.2782C34.4931 24.6606 34.4932 24.0431 34.4932 23.4255C34.4934 20.9554 34.4936 18.4852 34.4906 16.0151C34.4894 15.7232 34.4831 15.4289 34.4393 15.142C34.294 14.2063 33.7203 13.7116 32.777 13.7003C32.2197 13.6934 31.6615 13.695 31.1039 13.6966C30.9522 13.6971 30.8005 13.6975 30.6489 13.6978C29.261 13.7003 28.7336 14.2276 28.7324 15.6343C28.7305 18.6857 28.7307 21.737 28.731 24.7884C28.731 25.8055 28.7311 26.8226 28.7311 27.8397C28.7311 27.8972 28.7315 27.9548 28.7319 28.0125C28.7333 28.205 28.7346 28.3983 28.7211 28.5901C28.6597 29.4869 27.7891 30.3124 26.8973 30.3425C26.7345 30.3475 26.6631 30.2836 26.6543 30.1358C26.6443 29.9692 26.6443 29.8013 26.6443 29.6347C26.6443 28.9536 26.6443 28.2725 26.6444 27.5915C26.6446 24.8922 26.6448 22.1935 26.6418 19.4949C26.6405 18.1709 26.0555 17.5921 24.7328 17.5846C24.1491 17.5821 23.5641 17.5834 22.9804 17.5846C21.4672 17.5871 20.8898 18.1558 20.8885 19.6527C20.8879 21.5303 20.8879 23.408 20.8879 25.2857C20.8879 27.1633 20.8879 29.041 20.8873 30.9186C20.8873 32.1462 20.4789 32.5871 19.2489 32.755C18.9558 32.7951 18.8668 32.6961 18.8706 32.4343C18.8731 32.2677 18.8681 32.0999 18.8681 31.9333C18.8681 31.1591 18.8683 30.385 18.8686 29.611C18.8694 27.5472 18.8701 25.4839 18.8656 23.4205C18.863 22.1329 18.238 21.5053 16.9428 21.479C16.2338 21.4652 15.5236 21.4552 14.8146 21.4715C13.7436 21.4965 13.1198 22.1366 13.1173 23.2164C13.1127 25.0772 13.1133 26.9376 13.1139 28.798C13.1142 29.9833 13.1146 31.1686 13.1136 32.3542C13.1136 33.6005 12.7754 33.975 11.5328 34.1253C11.456 34.1347 11.3796 34.1497 11.3031 34.1648Z"
        fill={props.fill ? props.fill : 'white'}
      />
      <path
        d="M41.9737 23.0297C41.9912 23.3516 42 23.6748 42 24.0005C42 33.9425 33.9407 42.0005 24 41.9992C20.1532 41.9992 16.5883 40.7917 13.6635 38.7362C13.8617 38.7005 14.0593 38.6653 14.2562 38.6303C14.978 38.5019 15.6917 38.375 16.3992 38.2264C21.9795 37.0552 27.2806 35.1537 32.147 32.1387C35.9624 29.775 39.2806 26.8652 41.8798 23.1775C41.8972 23.1527 41.9139 23.1262 41.9304 23.0993C41.9448 23.076 41.9591 23.0524 41.9737 23.0297Z"
        fill={props.fill ? props.fill : '#FFF'}
      />
    </svg>
  )
}

const PendingTransactionIcon = ({ ...props }: React.SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg height="102" width="102" viewBox="0 0 102 102" fill="none" {...props}>
      <rect
        x="-8.6"
        y="76.7"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -47.7753 40.0412)"
        fill={props.fill ? props.fill : '#7B8694'}
        width="66"
        height="2"
      />
      <rect
        x="23.4"
        y="-8.4"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -10.2129 24.4824)"
        fill={props.fill ? props.fill : '#7B8694'}
        width="2"
        height="66"
      />
      <rect
        x="44.6"
        y="23.6"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 5.3419 62.0349)"
        fill={props.fill ? props.fill : '#7B8694'}
        width="66"
        height="2"
      />
      <rect
        x="76.6"
        y="44.6"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -32.1521 77.6221)"
        fill={props.fill ? props.fill : '#7B8694'}
        width="2"
        height="66"
      />
      <circle fill={props.fill ? props.fill : '#7B8694'} cx="17.1" cy="51" r="3" />
      <circle fill={props.fill ? props.fill : '#7B8694'} cx="84.9" cy="51" r="3" />
      <circle fill={props.fill ? props.fill : '#7B8694'} cx="51" cy="21.1" r="3" />
      <circle fill={props.fill ? props.fill : '#7B8694'} cx="51" cy="80.6" r="3" />
      <circle fill={props.fill ? props.fill : '#7B8694'} strokeWidth={2} cx="51.2" cy="51.2" r="4.1" />
    </svg>
  )
}

const GithubIcon = ({ ...props }: React.SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <path
        d="M24 6.74951C14.055 6.74951 6 14.6695 6 24.4375C6 32.254 11.157 38.8825 18.3075 41.2195C19.2075 41.386 19.5375 40.8385 19.5375 40.369C19.5375 39.949 19.5225 38.836 19.515 37.3615C14.508 38.428 13.452 34.9885 13.452 34.9885C12.633 32.947 11.4495 32.401 11.4495 32.401C9.819 31.3045 11.5755 31.327 11.5755 31.327C13.383 31.45 14.3325 33.1495 14.3325 33.1495C15.9375 35.854 18.546 35.0725 19.575 34.621C19.737 33.4765 20.2005 32.698 20.715 32.2555C16.7175 31.813 12.516 30.292 12.516 23.515C12.516 21.5845 13.2135 20.0065 14.3685 18.769C14.166 18.322 13.5585 16.5235 14.526 14.0875C14.526 14.0875 16.0335 13.6135 19.476 15.901C20.916 15.508 22.446 15.313 23.976 15.304C25.506 15.313 27.036 15.508 28.476 15.901C31.896 13.6135 33.4035 14.0875 33.4035 14.0875C34.371 16.5235 33.7635 18.322 33.5835 18.769C34.731 20.0065 35.4285 21.5845 35.4285 23.515C35.4285 30.31 31.221 31.8055 27.216 32.2405C27.846 32.7715 28.431 33.856 28.431 35.5135C28.431 37.8805 28.4085 39.7825 28.4085 40.357C28.4085 40.8205 28.7235 41.374 29.646 41.197C36.8475 38.875 42 32.242 42 24.4375C42 14.6695 33.9405 6.74951 24 6.74951Z"
        fill={props.fill ? props.fill : '#FFF'}
      />
    </svg>
  )
}

const CoingeckoIcon = (): ReactElement => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48.4 48">
      <g transform="translate(9.499 10.501)">
        <path
          d="M31.4,13.3c0,9.4-7.6,17.1-17,17.2c-9.4,0-17.1-7.6-17.2-17s7.6-17.1,17-17.2c0,0,0,0,0,0
        C23.7-3.7,31.4,3.9,31.4,13.3z"
          fill="#FFF"
        />
        <path
          d="M22.4,7.9c-1.1-0.3-2.3-0.8-3.5-1.3c-0.1-0.3-0.3-0.7-0.9-1.1c-0.8-0.7-2.3-0.7-3.5-0.4
        C13,4.8,11.6,4.7,10.3,5C-0.7,8,5.5,15.3,1.5,22.7c0.6,1.2,6.7,8.3,15.6,6.4c0,0-3-7.3,3.8-10.8C26.6,15.4,30.6,10.1,22.4,7.9z"
          fill="#19232d"
        />
        <path
          d="M23.7,12.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
        C23.4,12,23.7,12.3,23.7,12.7C23.7,12.7,23.7,12.7,23.7,12.7z"
          fill="#FFF"
        />
        <path d="M14.4,5.1c0.8,0.1,3.7,1,4.4,1.5C18.2,4.8,16.1,4.6,14.4,5.1L14.4,5.1z" />
        <path
          d="M15.2,9.6c0,1.7-1.4,3.1-3.1,3.1S9,11.3,9,9.6c0-1.7,1.4-3.1,3.1-3.1c0,0,0,0,0,0
        C13.8,6.6,15.2,8,15.2,9.6z"
          fill="#19232d"
        />
        <path
          d="M14.3,9.7c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2s1-2.2,2.2-2.2l0,0C13.3,7.5,14.3,8.5,14.3,9.7z"
          fill="#FFF"
        />
        <path
          d="M26.2,14c-2.5,1.7-5.3,3.1-9.3,3.1c-1.9,0-2.3-2-3.5-1c-0.6,0.5-2.9,1.6-4.7,1.5
        s-4.7-1.1-5.5-4.9c-0.3,3.8-0.5,6.6-1.9,9.8c2.9,4.6,9.6,8.1,15.8,6.6c-0.7-4.6,3.4-9.2,5.7-11.5C23.7,16.7,25.3,15.3,26.2,14
        L26.2,14z"
          fill="#19232d"
        />
        <path
          d="M26.1,14.2c-0.8,0.7-1.7,1.2-2.6,1.7c-0.9,0.4-1.9,0.8-2.9,1.1c-1,0.3-2.1,0.5-3.1,0.4
        c-1.1-0.1-2.2-0.5-2.9-1.3l0,0c0.9,0.6,1.9,0.8,2.9,0.8c1,0,2-0.1,3-0.2c1-0.2,2-0.5,2.9-0.9C24.3,15.2,25.3,14.8,26.1,14.2
        L26.1,14.2z"
          fill="#FFF"
        />
      </g>
    </svg>
  )
}

const CoingeckoLightIcon = (): ReactElement => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48.4 48">
      <g transform="translate(9.499 10.501)">
        <path
          d="M31.4,13.3c0,9.4-7.6,17.1-17,17.2c-9.4,0-17.1-7.6-17.2-17s7.6-17.1,17-17.2c0,0,0,0,0,0
        C23.7-3.7,31.4,3.9,31.4,13.3z"
          fill="#19232d"
        />
        <path
          d="M22.4,7.9c-1.1-0.3-2.3-0.8-3.5-1.3c-0.1-0.3-0.3-0.7-0.9-1.1c-0.8-0.7-2.3-0.7-3.5-0.4
        C13,4.8,11.6,4.7,10.3,5C-0.7,8,5.5,15.3,1.5,22.7c0.6,1.2,6.7,8.3,15.6,6.4c0,0-3-7.3,3.8-10.8C26.6,15.4,30.6,10.1,22.4,7.9z"
          fill="#f0f8ff"
        />
        <path
          d="M23.7,12.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
        C23.4,12,23.7,12.3,23.7,12.7C23.7,12.7,23.7,12.7,23.7,12.7z"
          fill="#19232d"
        />
        <path d="M14.4,5.1c0.8,0.1,3.7,1,4.4,1.5C18.2,4.8,16.1,4.6,14.4,5.1L14.4,5.1z" />
        <path
          d="M15.2,9.6c0,1.7-1.4,3.1-3.1,3.1S9,11.3,9,9.6c0-1.7,1.4-3.1,3.1-3.1c0,0,0,0,0,0
        C13.8,6.6,15.2,8,15.2,9.6z"
          fill="#f0f8ff"
        />
        <path
          d="M14.3,9.7c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2s1-2.2,2.2-2.2l0,0C13.3,7.5,14.3,8.5,14.3,9.7z"
          fill="#19232d"
        />
        <path
          d="M26.2,14c-2.5,1.7-5.3,3.1-9.3,3.1c-1.9,0-2.3-2-3.5-1c-0.6,0.5-2.9,1.6-4.7,1.5
        s-4.7-1.1-5.5-4.9c-0.3,3.8-0.5,6.6-1.9,9.8c2.9,4.6,9.6,8.1,15.8,6.6c-0.7-4.6,3.4-9.2,5.7-11.5C23.7,16.7,25.3,15.3,26.2,14
        L26.2,14z"
          fill="#f0f8ff"
        />
        <path
          d="M26.1,14.2c-0.8,0.7-1.7,1.2-2.6,1.7c-0.9,0.4-1.9,0.8-2.9,1.1c-1,0.3-2.1,0.5-3.1,0.4
        c-1.1-0.1-2.2-0.5-2.9-1.3l0,0c0.9,0.6,1.9,0.8,2.9,0.8c1,0,2-0.1,3-0.2c1-0.2,2-0.5,2.9-0.9C24.3,15.2,25.3,14.8,26.1,14.2
        L26.1,14.2z"
          fill="#19232d"
        />
      </g>
    </svg>
  )
}

const EllipseIcon = ({ ...props }: React.SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M44.7846 36C41.9274 40.9489 37.3981 44.7159 32.0114 46.6234C26.6247 48.5309 20.7341 48.4538 15.3992 46.4059C10.0642 44.358 5.6351 40.4738 2.90839 35.4518C0.181678 30.4298 -0.663648 24.5997 0.524457 19.0101C1.71256 13.4205 4.85613 8.43827 9.38972 4.95952C13.9233 1.48077 19.5494 -0.266181 25.2561 0.032891C30.9627 0.331963 36.3754 2.65743 40.5205 6.59101C44.6656 10.5246 47.2712 15.8081 47.8685 21.4913L44.5269 21.8425C44.0132 16.955 41.7724 12.4112 38.2076 9.02827C34.6428 5.64539 29.9879 3.64549 25.0802 3.38829C20.1725 3.13109 15.3341 4.63346 11.4352 7.62519C7.53627 10.6169 4.8328 14.9016 3.81103 19.7087C2.78926 24.5158 3.51624 29.5297 5.86122 33.8486C8.20619 38.1675 12.0153 41.5079 16.6033 43.2691C21.1913 45.0303 26.2572 45.0966 30.8898 43.4561C35.5223 41.8156 39.4175 38.576 41.8748 34.32L44.7846 36Z"
        fill={props.fill}
      />
    </svg>
  )
}

const PowerIcon = ({ ...props }: React.SVGProps<SVGSVGElement>): ReactElement => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 12C24 5.38323 18.6168 0 12 0C5.38323 0 0 5.38323 0 12C0 18.6163 5.38323 24 12 24C18.6173 24 24 18.6173 24 12ZM13.1784 11.9816C13.1784 12.611 12.6685 13.12 12.0401 13.12C11.4113 13.12 10.9013 12.61 10.9013 11.9816V6.05897C10.9013 5.43011 11.4113 4.92016 12.0401 4.92016C12.669 4.92016 13.1784 5.42963 13.1784 6.05897V11.9816ZM19.7488 12.0198C19.7488 16.2923 16.2729 19.7677 12 19.7677C7.72706 19.7677 4.25119 16.2923 4.25119 12.0198C4.25119 9.9486 5.05792 8.00161 6.52348 6.53847C6.74583 6.31612 7.03682 6.20543 7.32828 6.20543C7.61975 6.20543 7.9117 6.3166 8.13405 6.53943C8.57875 6.98461 8.57826 7.70531 8.13309 8.15C7.09917 9.18344 6.52928 10.5576 6.52928 12.0198C6.52928 15.036 8.98332 17.4891 12 17.4891C15.0167 17.4891 17.4702 15.036 17.4702 12.0198C17.4702 10.5586 16.9018 9.18489 15.8688 8.15145C15.4242 7.70627 15.4246 6.98558 15.8693 6.5404C16.3145 6.09522 17.0352 6.09619 17.4804 6.54088C18.9426 8.00451 19.7488 9.95053 19.7488 12.0198Z"
      fill={props.fill}
    />
  </svg>
)

const ConnectIcon = ({ ...props }: React.SVGProps<SVGSVGElement>): ReactElement => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.34286 0H10.1907C10.8923 0 11.5871 0.14071 12.2353 0.414095C12.8836 0.687481 13.4726 1.08819 13.9687 1.59334C14.4648 2.09849 14.8584 2.69819 15.1269 3.3582C15.3954 4.01821 15.5336 4.72561 15.5336 5.44V5.768C15.5315 7.20939 14.9677 8.59102 13.9659 9.60949C12.9642 10.628 11.6064 11.2 10.1907 11.2H9.42857V9.6H10.1907C11.1869 9.5979 12.1418 9.19459 12.8469 8.47813C13.552 7.76168 13.9501 6.79027 13.9543 5.776V5.44C13.9543 4.42434 13.5591 3.45003 12.8552 2.73035C12.1513 2.01067 11.1961 1.60423 10.1986 1.6H5.34286C4.34261 1.6 3.38333 2.00457 2.67605 2.72471C1.96877 3.44485 1.57143 4.42157 1.57143 5.44V5.768C1.57379 6.67285 1.89068 7.54763 2.46595 8.23732C3.04122 8.92702 3.83771 9.38708 4.71429 9.536V11.136C3.42227 10.9802 2.23049 10.3497 1.36253 9.36289C0.494578 8.37605 0.0101025 7.10066 0 5.776V5.44C0.00207832 3.99787 0.565652 2.61542 1.56718 1.59568C2.56871 0.575937 3.92648 0.00211611 5.34286 0ZM17.2857 6.464V4.864C18.5804 5.02015 19.7743 5.65291 20.6426 6.6431C21.511 7.63329 21.9937 8.91257 22 10.24V10.568C21.9959 12.0074 21.4324 13.3866 20.4328 14.4043C19.4332 15.4221 18.0787 15.9958 16.665 16H11.8093C10.3964 15.9979 9.04177 15.426 8.04193 14.4095C7.0421 13.393 6.47844 12.0146 6.47429 10.576V10.24C6.47428 8.79861 7.03611 7.41613 8.03639 6.39616C9.03667 5.3762 10.3936 4.80212 11.8093 4.8H12.5714V6.4H11.8093C10.8104 6.40212 9.85314 6.80762 9.14756 7.52753C8.44198 8.24745 8.04571 9.22295 8.04571 10.24V10.568C8.04779 11.5837 8.44497 12.5571 9.15033 13.2753C9.85569 13.9935 10.8118 14.3979 11.8093 14.4H16.665C17.6612 14.3979 18.6161 13.9946 19.3212 13.2781C20.0263 12.5617 20.4244 11.5903 20.4286 10.576V10.24C20.4281 9.33378 20.112 8.45709 19.5366 7.76573C18.9612 7.07438 18.1636 6.61314 17.2857 6.464Z"
      fill={props.fill}
    />
  </svg>
)

const ArrowIcon = ({ ...props }: React.SVGProps<SVGAElement>): ReactElement => (
  <svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.99992 1L1 7" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.00007 1H7V6" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowDownCircled = ({ ...props }: React.SVGProps<SVGAElement>): ReactElement => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      className="path"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 -1.43099e-07C8.8174 -1.81051e-07 5.76515 1.26428 3.51472 3.51472C1.26428 5.76515 1.81051e-07 8.8174 1.43099e-07 12C1.05146e-07 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472C18.2348 1.26428 15.1826 -1.05146e-07 12 -1.43099e-07ZM12.75 6.75C12.75 6.55109 12.671 6.36032 12.5303 6.21967C12.3897 6.07902 12.1989 6 12 6C11.8011 6 11.6103 6.07902 11.4697 6.21967C11.329 6.36032 11.25 6.55109 11.25 6.75L11.25 15.4395L8.031 12.219C7.96127 12.1493 7.87848 12.094 7.78738 12.0562C7.69627 12.0185 7.59862 11.9991 7.5 11.9991C7.40138 11.9991 7.30373 12.0185 7.21262 12.0562C7.12152 12.094 7.03873 12.1493 6.969 12.219C6.89927 12.2887 6.84395 12.3715 6.80622 12.4626C6.76848 12.5537 6.74905 12.6514 6.74905 12.75C6.74905 12.8486 6.76848 12.9463 6.80622 13.0374C6.84395 13.1285 6.89927 13.2113 6.969 13.281L11.469 17.781C11.5387 17.8508 11.6214 17.9063 11.7126 17.9441C11.8037 17.9819 11.9013 18.0013 12 18.0013C12.0987 18.0013 12.1963 17.9819 12.2875 17.9441C12.3786 17.9063 12.4613 17.8508 12.531 17.781L17.031 13.281C17.1718 13.1402 17.2509 12.9492 17.2509 12.75C17.2509 12.5508 17.1718 12.3598 17.031 12.219C16.8902 12.0782 16.6992 11.9991 16.5 11.9991C16.3008 11.9991 16.1098 12.0782 15.969 12.219L12.75 15.4395L12.75 6.75Z"
    />
  </svg>
)

const Cog = ({ ...props }: React.SVGProps<SVGAElement>): ReactElement => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.034 6H13.97C13.8762 5.99917 13.7848 5.97011 13.7078 5.9166C13.6307 5.86309 13.5715 5.78761 13.538 5.7C13.5027 5.6154 13.4933 5.52221 13.5111 5.43228C13.529 5.34235 13.5731 5.25976 13.638 5.195L13.6835 5.1495C13.9578 4.87417 14.1118 4.50138 14.1118 4.11275C14.1118 3.72412 13.9578 3.35133 13.6835 3.076L12.928 2.321C12.6529 2.04651 12.2801 1.89236 11.8915 1.89236C11.5029 1.89236 11.1301 2.04651 10.855 2.321L10.8095 2.3665C10.7425 2.43106 10.658 2.47464 10.5666 2.4919C10.4751 2.50917 10.3806 2.49936 10.2947 2.46368C10.2087 2.428 10.1351 2.36801 10.0827 2.29106C10.0304 2.21411 10.0016 2.12355 10 2.0305V1.966C9.9996 1.57731 9.84502 1.20466 9.57018 0.92982C9.29534 0.654978 8.92269 0.500397 8.534 0.5H7.466C7.07731 0.500397 6.70466 0.654978 6.42982 0.92982C6.15498 1.20466 6.0004 1.57731 6 1.966V2.0305C5.99756 2.12288 5.9684 2.21258 5.91603 2.28873C5.86367 2.36488 5.79035 2.42422 5.70496 2.45956C5.61957 2.49491 5.52576 2.50474 5.4349 2.48786C5.34404 2.47099 5.26001 2.42814 5.193 2.3645L5.15 2.319C4.87489 2.04451 4.50213 1.89036 4.1135 1.89036C3.72487 1.89036 3.35211 2.04451 3.077 2.319L2.319 3.074C2.04472 3.34933 1.89073 3.72212 1.89073 4.11075C1.89073 4.49938 2.04472 4.87217 2.319 5.1475L2.3645 5.193C2.43003 5.26004 2.47389 5.34523 2.49038 5.43752C2.50688 5.5298 2.49525 5.62491 2.457 5.7105C2.42269 5.79575 2.36373 5.86883 2.28767 5.9204C2.21161 5.97197 2.1219 5.99968 2.03 6H1.966C1.57731 6.0004 1.20466 6.15498 0.92982 6.42982C0.654978 6.70466 0.500397 7.07731 0.5 7.466V8.534C0.500397 8.92269 0.654978 9.29534 0.92982 9.57018C1.20466 9.84502 1.57731 9.9996 1.966 10H2.03C2.12381 10.0008 2.21519 10.0299 2.29225 10.0834C2.3693 10.1369 2.42846 10.2124 2.462 10.3C2.49732 10.3846 2.50666 10.4778 2.48886 10.5677C2.47105 10.6576 2.42689 10.7402 2.362 10.805L2.3165 10.8505C2.04222 11.1258 1.88823 11.4986 1.88823 11.8872C1.88823 12.2759 2.04222 12.6487 2.3165 12.924L3.0715 13.6785C3.34657 13.9533 3.71946 14.1076 4.10825 14.1076C4.49704 14.1076 4.86993 13.9533 5.145 13.6785L5.1905 13.633C5.25758 13.5675 5.34277 13.5237 5.43503 13.5072C5.5273 13.4907 5.6224 13.5023 5.708 13.5405C5.79325 13.5747 5.86635 13.6335 5.91793 13.7095C5.96951 13.7855 5.99722 13.8752 5.9975 13.967V14.0315C5.99737 14.2244 6.03526 14.4154 6.10901 14.5936C6.18277 14.7719 6.29093 14.9338 6.42732 15.0702C6.56371 15.2066 6.72565 15.3147 6.90387 15.3885C7.0821 15.4622 7.27312 15.5001 7.466 15.5H8.534C8.92269 15.4996 9.29534 15.345 9.57018 15.0702C9.84502 14.7953 9.9996 14.4227 10 14.034V13.9695C10.0024 13.8771 10.0316 13.7874 10.084 13.7113C10.1363 13.6351 10.2096 13.5758 10.295 13.5404C10.3804 13.5051 10.4742 13.4953 10.5651 13.5121C10.656 13.529 10.74 13.5719 10.807 13.6355L10.8525 13.681C11.1276 13.9555 11.5004 14.1096 11.889 14.1096C12.2776 14.1096 12.6504 13.9555 12.9255 13.681L13.681 12.9265C13.9553 12.6512 14.1093 12.2784 14.1093 11.8897C14.1093 11.5011 13.9553 11.1283 13.681 10.853L13.6355 10.8075C13.57 10.7405 13.5261 10.6553 13.5096 10.563C13.4931 10.4707 13.5048 10.3756 13.543 10.29C13.5772 10.2047 13.6362 10.1315 13.7122 10.0798C13.7883 10.0281 13.878 10.0004 13.97 10H14.034C14.4227 9.9996 14.7953 9.84502 15.0702 9.57018C15.345 9.29534 15.4996 8.92269 15.5 8.534V7.466C15.4996 7.07731 15.345 6.70466 15.0702 6.42982C14.7953 6.15498 14.4227 6.0004 14.034 6ZM14.5 8.534C14.4999 8.65755 14.4507 8.776 14.3634 8.86337C14.276 8.95073 14.1576 8.99987 14.034 9H13.97C13.6798 9.00247 13.3968 9.09029 13.1563 9.25252C12.9157 9.41474 12.7282 9.64419 12.6171 9.91226C12.5061 10.1803 12.4764 10.4752 12.5317 10.76C12.5871 11.0448 12.7251 11.3071 12.9285 11.514L12.9735 11.5595C13.0608 11.647 13.1098 11.7656 13.1098 11.8892C13.1098 12.0129 13.0608 12.1315 12.9735 12.219L12.218 12.9735C12.1306 13.0609 12.0121 13.11 11.8885 13.11C11.7649 13.11 11.6464 13.0609 11.559 12.9735L11.514 12.928C11.307 12.7248 11.0448 12.5871 10.76 12.5318C10.4752 12.4766 10.1805 12.5063 9.91256 12.6173C9.64458 12.7284 9.41518 12.9157 9.25292 13.1562C9.09066 13.3966 9.0027 13.6795 9 13.9695V14.034C8.99987 14.1576 8.95073 14.276 8.86337 14.3634C8.776 14.4507 8.65755 14.4999 8.534 14.5H7.466C7.34245 14.4999 7.224 14.4507 7.13663 14.3634C7.04927 14.276 7.00013 14.1576 7 14.034V13.9695C6.9986 13.6789 6.91139 13.3951 6.74932 13.1539C6.58725 12.9126 6.35754 12.7246 6.08901 12.6134C5.82048 12.5022 5.5251 12.4728 5.23991 12.5288C4.95473 12.5849 4.69246 12.7239 4.486 12.9285L4.4405 12.974C4.35298 13.0611 4.2345 13.1101 4.111 13.1101C3.9875 13.1101 3.86902 13.0611 3.7815 12.974L3.0265 12.2195C2.93921 12.132 2.89019 12.0134 2.89019 11.8897C2.89019 11.7661 2.93921 11.6475 3.0265 11.56L3.072 11.5145C3.2756 11.3076 3.41374 11.0452 3.46919 10.7603C3.52465 10.4753 3.49495 10.1803 3.38381 9.91214C3.27268 9.64394 3.08502 9.41442 2.84426 9.25221C2.6035 9.09 2.3203 9.00228 2.03 9H1.966C1.84245 8.99987 1.724 8.95073 1.63663 8.86337C1.54927 8.776 1.50013 8.65755 1.5 8.534V7.466C1.50013 7.34245 1.54927 7.224 1.63663 7.13663C1.724 7.04927 1.84245 7.00013 1.966 7H2.03C2.32015 6.99753 2.60316 6.90971 2.84374 6.74748C3.08432 6.58526 3.27183 6.35581 3.38289 6.08774C3.49394 5.81967 3.52363 5.52484 3.46826 5.24C3.41289 4.95517 3.2749 4.69294 3.0715 4.486L3.0265 4.4405C2.93924 4.35304 2.89023 4.23454 2.89023 4.111C2.89023 3.98746 2.93924 3.86896 3.0265 3.7815L3.7815 3.026C3.86889 2.93862 3.98741 2.88952 4.111 2.88952C4.23459 2.88952 4.35311 2.93862 4.4405 3.026L4.4855 3.0715C4.69247 3.2748 4.95469 3.41272 5.23948 3.46807C5.52427 3.52343 5.81905 3.49377 6.08711 3.38279C6.35517 3.27182 6.58465 3.08443 6.74698 2.84397C6.9093 2.60351 6.9973 2.32061 7 2.0305V1.966C7.00013 1.84245 7.04927 1.724 7.13663 1.63663C7.224 1.54927 7.34245 1.50013 7.466 1.5H8.534C8.65755 1.50013 8.776 1.54927 8.86337 1.63663C8.95073 1.724 8.99987 1.84245 9 1.966V2.0305C9.00257 2.32061 9.09046 2.60355 9.25272 2.84406C9.41498 3.08456 9.64444 3.27199 9.91249 3.38299C10.1805 3.49398 10.4753 3.52363 10.7601 3.46824C11.0449 3.41285 11.3071 3.27487 11.514 3.0715L11.5595 3.026C11.6469 2.93862 11.7654 2.88952 11.889 2.88952C12.0126 2.88952 12.1311 2.93862 12.2185 3.026L12.9735 3.7815C13.0608 3.86896 13.1098 3.98746 13.1098 4.111C13.1098 4.23454 13.0608 4.35304 12.9735 4.4405L12.928 4.486C12.7246 4.69297 12.5866 4.95525 12.5312 5.24013C12.4759 5.525 12.5056 5.81987 12.6167 6.08796C12.7278 6.35606 12.9154 6.5855 13.1561 6.74769C13.3967 6.90988 13.6798 6.99763 13.97 7H14.034C14.1576 7.00013 14.276 7.04927 14.3634 7.13663C14.4507 7.224 14.4999 7.34245 14.5 7.466V8.534Z"
      fill="#FFFFFF"
    />
    <path
      d="M8 4.5C7.30777 4.5 6.63108 4.70527 6.05551 5.08986C5.47993 5.47444 5.03133 6.02107 4.76642 6.66061C4.50152 7.30015 4.4322 8.00388 4.56725 8.68282C4.7023 9.36175 5.03564 9.98539 5.52513 10.4749C6.01461 10.9644 6.63825 11.2977 7.31719 11.4327C7.99612 11.5678 8.69985 11.4985 9.33939 11.2336C9.97893 10.9687 10.5256 10.5201 10.9101 9.9445C11.2947 9.36892 11.5 8.69223 11.5 8C11.4989 7.07207 11.1299 6.18244 10.4737 5.5263C9.81756 4.87015 8.92793 4.50106 8 4.5ZM8 10.5C7.50555 10.5 7.0222 10.3534 6.61108 10.0787C6.19995 9.80397 5.87952 9.41352 5.6903 8.95671C5.50108 8.49989 5.45157 7.99723 5.54804 7.51227C5.6445 7.02732 5.8826 6.58186 6.23223 6.23223C6.58187 5.8826 7.02732 5.6445 7.51228 5.54804C7.99723 5.45157 8.4999 5.50108 8.95671 5.6903C9.41353 5.87952 9.80397 6.19995 10.0787 6.61107C10.3534 7.0222 10.5 7.50555 10.5 8C10.4992 8.6628 10.2356 9.29822 9.76689 9.76689C9.29822 10.2356 8.6628 10.4992 8 10.5Z"
      fill="#FFFFFF"
    />
  </svg>
)

const Info = ({ ...props }: React.SVGProps<SVGAElement>): ReactElement => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.1111 6.66667C11.1111 6.05302 10.6137 5.55556 10 5.55556C9.38635 5.55556 8.88889 6.05302 8.88889 6.66667C8.88889 7.28032 9.38635 7.77778 10 7.77778C10.6137 7.77778 11.1111 7.28032 11.1111 6.66667Z"
      fill="#FFF"
    />
    <path
      d="M8.88889 10C8.88889 9.38638 9.38635 8.88892 10 8.88892C10.6137 8.88892 11.1111 9.38638 11.1111 10V13.3334C11.1111 13.947 10.6137 14.4445 10 14.4445C9.38635 14.4445 8.88889 13.947 8.88889 13.3334V10Z"
      fill="#FFF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z"
      fill="#FFF"
    />
  </svg>
)

const Close = ({ ...props }: React.SVGProps<SVGAElement>): ReactElement => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.5938 13.8915L9.04991 10.3477L5.45615 13.9414L4.04193 12.5272L7.6357 8.93344L4.10848 5.40623L5.3896 4.12511L8.91681 7.65233L12.5272 4.04192L13.9414 5.45614L10.331 9.06654L13.8749 12.6104L12.5938 13.8915Z"
      fill="#FFFFFF"
    />
  </svg>
)

export {
  GithubIcon,
  DiscordIcon,
  EtherscanIcon,
  CoingeckoIcon,
  EllipseIcon,
  CoingeckoLightIcon,
  PowerIcon,
  ConnectIcon,
  ArrowIcon,
  ArrowDownCircled,
  PendingTransactionIcon,
  Cog,
  Info,
  Close
}
