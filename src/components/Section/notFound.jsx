import React from 'react';

import { Container } from './styles'

export function NotFound(){
    return(
        <Container>
            <h3 className="not-found">Pelo visto ainda não temos sua escolha favorita!</h3>
            <svg width="90" height="80" viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4366_1226)">
<path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#065E7C"/>
<path d="M48.15 39.299C47.35 34.729 43.957 34.882 39.873 35.599C35.789 36.316 32.553 37.332 33.359 41.899C34.165 46.466 38.13 49.592 42.215 48.871C46.3 48.15 48.956 43.871 48.15 39.299Z" fill="#E6E6E6"/>
<path d="M36.2121 51.2131C34.5121 50.6891 32.3511 49.2701 31.6961 45.4861C31.1969 42.7534 31.7083 39.9325 33.1351 37.5491C33.8117 36.3945 34.7286 35.3988 35.8237 34.6297C36.9188 33.8605 38.1665 33.3358 39.4821 33.0911C40 32.9982 40.525 32.9513 41.0511 32.9511C45.7771 32.9511 50.0511 36.7341 50.9751 42.0361C52.2571 49.4181 45.5021 50.6271 42.6171 51.1431C41.3515 51.3952 40.0663 51.5364 38.7761 51.5651C37.9086 51.5774 37.0442 51.4587 36.2121 51.2131ZM40.3031 37.8131C39.6472 37.9424 39.0267 38.211 38.4834 38.6007C37.9402 38.9904 37.4869 39.4922 37.1541 40.0721C36.3417 41.4501 36.0575 43.0762 36.3541 44.6481C36.6461 46.3231 37.2361 46.5051 37.5891 46.6131C37.9799 46.7198 38.3842 46.7686 38.7891 46.7581C39.8015 46.7261 40.8093 46.6093 41.8021 46.4091C46.5831 45.5541 46.6431 44.7041 46.3231 42.8631C45.8061 39.8881 43.5331 37.7461 41.0631 37.7461C40.8083 37.7457 40.554 37.7681 40.3031 37.8131ZM14.4031 42.7611C14.0886 40.9736 14.4918 39.1341 15.5251 37.6421C16.0273 36.9065 16.6711 36.2784 17.4189 35.7945C18.1666 35.3107 19.0034 34.9807 19.8801 34.8241C20.7537 34.666 21.6502 34.6851 22.5163 34.8801C23.3824 35.075 24.2005 35.4419 24.9221 35.9591C25.6523 36.4781 26.2731 37.136 26.7489 37.8951C27.2247 38.6542 27.5463 39.4996 27.6951 40.3831C27.8062 41.0057 27.6671 41.647 27.3079 42.1675C26.9488 42.6881 26.3986 43.0459 25.7771 43.1631C25.4693 43.2159 25.154 43.2072 24.8495 43.1377C24.5449 43.0681 24.2572 42.939 24.0028 42.7577C23.7484 42.5765 23.5323 42.3467 23.3671 42.0816C23.2019 41.8165 23.0908 41.5213 23.0401 41.2131C22.9495 40.6799 22.651 40.2044 22.2101 39.8911C21.9943 39.7369 21.7497 39.6275 21.4909 39.5695C21.232 39.5114 20.9642 39.5059 20.7031 39.5531C20.4414 39.6003 20.1916 39.6992 19.9684 39.8439C19.7452 39.9886 19.5531 40.1763 19.4031 40.3961C19.0934 40.8428 18.973 41.3939 19.0681 41.9291C19.1803 42.5529 19.0412 43.1957 18.6811 43.7173C18.321 44.2389 17.7692 44.5968 17.1461 44.7131C17.0101 44.7366 16.8722 44.7487 16.7341 44.7491C16.1735 44.746 15.632 44.5447 15.2054 44.1809C14.7789 43.8171 14.4947 43.3142 14.4031 42.7611ZM52.9891 35.8541C52.6705 34.0763 53.0667 32.2445 54.0916 30.7574C55.1166 29.2703 56.6873 28.248 58.4621 27.9131C59.3404 27.7628 60.2396 27.7875 61.1083 27.9857C61.977 28.1839 62.7979 28.5517 63.5241 29.0681C64.2502 29.5844 64.8672 30.2391 65.3396 30.9945C65.8121 31.7499 66.1307 32.5912 66.2771 33.4701C66.3882 34.0927 66.2491 34.734 65.8899 35.2545C65.5308 35.7751 64.9806 36.1329 64.3591 36.2501C64.0521 36.303 63.7377 36.2949 63.4339 36.2261C63.13 36.1574 62.8427 36.0294 62.5884 35.8495C62.334 35.6696 62.1177 35.4413 61.9517 35.1776C61.7858 34.914 61.6734 34.6202 61.6211 34.3131C61.5781 34.0496 61.4834 33.7973 61.3423 33.5706C61.2013 33.344 61.0168 33.1475 60.7994 32.9925C60.5821 32.8375 60.3362 32.7271 60.0759 32.6677C59.8157 32.6082 59.5462 32.6009 59.2831 32.6461C58.7525 32.7462 58.2829 33.0518 57.9763 33.4963C57.6698 33.9409 57.5511 34.4885 57.6461 35.0201C57.7578 35.643 57.6189 36.2848 57.2597 36.8058C56.9005 37.3268 56.35 37.6849 55.7281 37.8021C55.5914 37.8257 55.4529 37.8377 55.3141 37.8381C54.7551 37.8339 54.2154 37.6327 53.7901 37.2698C53.3648 36.9068 53.0812 36.4055 52.9891 35.8541Z" fill="black"/>
<path d="M63.2868 61.749C63.3067 62.6344 63.1345 63.5136 62.7818 64.326C62.4752 65.0265 61.9687 65.6209 61.3258 66.035C60.6762 66.4409 59.9227 66.6494 59.1568 66.635C58.395 66.6474 57.6457 66.4409 56.9978 66.04C56.3525 65.6288 55.8415 65.0379 55.5278 64.34C55.1671 63.5425 54.9868 62.6752 54.9998 61.8V61.308C54.9815 60.4182 55.1583 59.5352 55.5178 58.721C55.8276 58.019 56.3367 57.4234 56.9818 57.008C57.6295 56.6036 58.3804 56.3953 59.1438 56.408C59.9073 56.3953 60.6581 56.6036 61.3058 57.008C61.9515 57.4242 62.4605 58.0209 62.7698 58.724C63.128 59.5347 63.3044 60.4139 63.2868 61.3V61.749ZM61.2558 61.3C61.3089 60.4705 61.1185 59.6436 60.7078 58.921C60.5406 58.6609 60.3083 58.4491 60.0339 58.3065C59.7596 58.1639 59.4528 58.0955 59.1438 58.108C58.8373 58.0953 58.5327 58.1624 58.2598 58.3026C57.9869 58.4428 57.755 58.6514 57.5868 58.908C57.1757 59.6219 56.9827 60.4406 57.0318 61.263V61.748C56.985 62.573 57.1759 63.3942 57.5818 64.114C57.7465 64.3814 57.9793 64.6002 58.2565 64.748C58.5336 64.8958 58.845 64.9672 59.1588 64.955C59.4656 64.9676 59.7704 64.8994 60.0425 64.7572C60.3147 64.6151 60.5448 64.404 60.7098 64.145C61.1157 63.4267 61.306 62.6066 61.2578 61.783L61.2558 61.3ZM64.3168 62.736C64.3045 62.0591 64.4461 61.3882 64.7308 60.774C64.9873 60.2203 65.4025 59.7552 65.9238 59.438C66.4711 59.1162 67.0971 58.9531 67.7318 58.967C68.1713 58.9502 68.6096 59.0227 69.0202 59.1802C69.4308 59.3376 69.8052 59.5767 70.1208 59.883C70.7638 60.5541 71.132 61.4418 71.1528 62.371L71.1658 62.877C71.2148 63.8722 70.883 64.8487 70.2378 65.608C69.9225 65.951 69.536 66.2209 69.1053 66.3986C68.6746 66.5764 68.2103 66.6578 67.7448 66.637C67.2787 66.6582 66.8135 66.5775 66.3817 66.4004C65.9499 66.2234 65.5619 65.9544 65.2448 65.612C64.5903 64.8349 64.257 63.8374 64.3128 62.823L64.3168 62.736ZM66.2478 62.88C66.2122 63.4435 66.3475 64.0046 66.6358 64.49C66.7576 64.67 66.9235 64.8157 67.1177 64.9132C67.3118 65.0107 67.5278 65.0568 67.7448 65.047C67.9597 65.0557 68.1733 65.0098 68.3657 64.9136C68.558 64.8175 68.7229 64.6741 68.8448 64.497C69.1493 63.963 69.2865 63.3499 69.2388 62.737C69.2723 62.1761 69.135 61.6182 68.8448 61.137C68.7241 60.9541 68.5583 60.8054 68.3633 60.7054C68.1683 60.6053 67.9508 60.5573 67.7318 60.566C67.5154 60.5569 67.3002 60.6041 67.1074 60.7029C66.9146 60.8018 66.7508 60.9489 66.6318 61.13C66.3363 61.6625 66.2028 62.2697 66.2478 62.877V62.88ZM72.0558 62.736C72.043 62.0581 72.1846 61.3861 72.4698 60.771C72.7268 60.2184 73.142 59.7544 73.6628 59.438C74.21 59.1159 74.836 58.9525 75.4708 58.966C75.9103 58.9492 76.3486 59.0217 76.7592 59.1792C77.1698 59.3366 77.5442 59.5757 77.8598 59.882C78.5034 60.5532 78.872 61.4413 78.8928 62.371L78.9058 62.877C78.9545 63.8723 78.6224 64.8488 77.9768 65.608C77.6613 65.9513 77.2744 66.2213 76.8434 66.3991C76.4124 66.5768 75.9476 66.6581 75.4818 66.637C75.0166 66.6572 74.5525 66.5759 74.1218 66.3987C73.6911 66.2215 73.3042 65.9527 72.9878 65.611C72.3333 64.8339 72 63.8364 72.0558 62.822V62.736ZM73.9868 62.88C73.9512 63.4435 74.0865 64.0046 74.3748 64.49C74.4968 64.6691 74.6625 64.814 74.8563 64.911C75.05 65.008 75.2654 65.0538 75.4818 65.044C75.6967 65.0527 75.9103 65.0068 76.1026 64.9106C76.295 64.8145 76.4599 64.6711 76.5818 64.494C76.8863 63.96 77.0235 63.3469 76.9758 62.734C77.0093 62.1731 76.872 61.6152 76.5818 61.134C76.461 60.9524 76.2956 60.8049 76.1014 60.7056C75.9072 60.6063 75.6908 60.5586 75.4728 60.567C75.2564 60.5579 75.0412 60.6051 74.8484 60.7039C74.6556 60.8028 74.4918 60.9499 74.3728 61.131C74.0768 61.663 73.9426 62.2698 73.9868 62.877V62.88ZM81.9818 59.91C82.2078 59.613 82.5001 59.3731 82.8354 59.2093C83.1707 59.0456 83.5397 58.9626 83.9128 58.967C85.4808 58.967 86.2762 59.9003 86.2988 61.767V66.5H84.3658V61.817C84.3926 61.4818 84.2978 61.1481 84.0988 60.877C83.9807 60.7663 83.8403 60.6822 83.6869 60.6305C83.5335 60.5787 83.3708 60.5605 83.2098 60.577C82.9631 60.5606 82.7168 60.6145 82.4995 60.7323C82.2821 60.8502 82.1026 61.0273 81.9818 61.243V66.5H80.0488V56H81.9818V59.91ZM89.7208 63.444H88.1208L87.8938 56.544H89.9518L89.7208 63.444ZM88.9208 64.524C89.0647 64.5176 89.2084 64.5403 89.3433 64.5908C89.4782 64.6414 89.6015 64.7186 89.7058 64.818C89.8049 64.9159 89.8827 65.0333 89.9343 65.1627C89.9859 65.2921 90.0103 65.4308 90.0058 65.57C90.01 65.7082 89.9855 65.8457 89.9339 65.9739C89.8823 66.1022 89.8046 66.2183 89.7058 66.315C89.6015 66.4144 89.4782 66.4916 89.3433 66.5422C89.2084 66.5927 89.0647 66.6154 88.9208 66.609C88.7779 66.6151 88.6351 66.5922 88.5013 66.5417C88.3674 66.4912 88.2451 66.414 88.1418 66.315C88.043 66.2183 87.9654 66.1022 87.9137 65.9739C87.8621 65.8457 87.8376 65.7082 87.8418 65.57C87.838 65.4313 87.8626 65.2932 87.9142 65.1644C87.9658 65.0356 88.0433 64.9187 88.1418 64.821C88.2441 64.7216 88.3656 64.644 88.4988 64.5929C88.6321 64.5419 88.7743 64.5184 88.9168 64.524H88.9208Z" fill="#E6E6E6"/>
</g>
<defs>
<clipPath id="clip0_4366_1226">
<rect width="90" height="80" fill="white"/>
</clipPath>
</defs>
            </svg>
        </Container>
    )
}