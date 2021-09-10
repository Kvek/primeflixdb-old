import { LIGHT_GRAYISH_YELLOW } from 'theme';
import { SvgPropsInterface } from 'types';

export const Sun = ({ onClick }: SvgPropsInterface): JSX.Element => (
  <svg className="iconss" fill="none" onClick={onClick} viewBox="0 0 15 15">
    <title>Click to toggle light mode</title>
    <g fill={LIGHT_GRAYISH_YELLOW}>
      <path d="m11.25 7.5c0 .7417-.2199 1.46668-.632 2.08339s-.9977 1.09731-1.68293 1.38121c-.68523.2838-1.43925.358-2.16664.2133-.72745-.1447-1.39564-.5018-1.92008-1.0263-.52445-.52439-.8816-1.19258-1.02629-1.92003-.1447-.72739-.07044-1.48141.21339-2.16664s.76448-1.27089 1.38116-1.68294c.61671-.41206 1.34169-.63199 2.08339-.63199.99455 0 1.94839.39509 2.6516 1.09835.7033.70326 1.0984 1.6571 1.0984 2.65165z" />
      <path d="m7.5 2.67857c.14207 0 .27836-.05644.3788-.1569.10045-.10047.15691-.23673.15691-.37881v-1.607146c0-.14208-.05646-.278341-.15691-.378807-.10044-.1004658-.23673-.156907-.3788-.156907s-.27836.0564412-.3788.156907c-.10045.100466-.15691.236727-.15691.378807v1.607146c0 .14208.05646.27834.15691.37881.10044.10046.23673.1569.3788.1569zm-4.16786 1.41429c.05006.04965.10943.08893.17469.11559.06528.02666.13516.04017.20567.03976.07051.00041.14039-.0131.20567-.03976.06526-.02666.12463-.06594.17469-.11559.05021-.0498.09006-.10905.11726-.17434.0272-.06528.0412-.1353.0412-.20602s-.014-.14074-.0412-.20603c-.0272-.06528-.06705-.12453-.11726-.17433l-1.14107-1.13571c-.10249-.08777-.23432-.13362-.36914-.12842-.13483.00521-.26272.0611-.35813.15651s-.1513.2233-.15651.35813c-.0052.13482.04065.26665.12842.36914zm-.65357 3.40714c0-.14207-.05644-.27836-.1569-.3788-.10047-.10045-.23673-.15691-.37881-.15691h-1.607146c-.14208 0-.278341.05646-.378807.15691-.1004658.10044-.156907.23673-.156907.3788s.0564412.27836.156907.3788c.100466.10045.236727.15691.378807.15691h1.607146c.14208 0 .27834-.05646.37881-.15691.10046-.10044.1569-.23673.1569-.3788zm.65357 3.4071-1.13571 1.1411c-.09978.1004-.15578.2362-.15578.3777s.056.2773.15578.3777c.05006.0496.10942.0889.17469.1156.06527.0266.13516.0402.20567.0397.14053-.0006.27521-.0564.375-.1553l1.14107-1.1357c.10087-.1009.15755-.2377.15755-.3804s-.05668-.2795-.15755-.3804c-.10088-.1008-.2377-.1575-.38036-.1575s-.27948.0567-.38036.1575zm4.16786 1.4143c-.14207 0-.27836.0565-.3788.1569-.10045.1005-.15691.2368-.15691.3788v1.6072c0 .1421.05646.2783.15691.3788.10044.1004.23673.1569.3788.1569s.27836-.0565.3788-.1569c.10045-.1005.15691-.2367.15691-.3788v-1.6072c0-.142-.05646-.2783-.15691-.3788-.10044-.1004-.23673-.1569-.3788-.1569zm4.1679-1.4143c-.05-.0499-.1093-.0895-.1746-.1166-.0652-.027-.1351-.0409-.2058-.0409s-.1406.0139-.2058.0409c-.0653.0271-.1246.0667-.1746.1166-.0499.05-.0895.1093-.1166.1746-.027.0652-.0409.1351-.0409.2058s.0139.1406.0409.2058c.0271.0653.0667.1246.1166.1746l1.1411 1.1357c.0998.0989.2345.1547.375.1553.0705.0005.1404-.0131.2057-.0397.0652-.0267.1246-.066.1747-.1156.0998-.1004.1558-.2362.1558-.3777s-.056-.2773-.1558-.3777zm2.7964-3.94281h-1.6072c-.142 0-.2783.05646-.3788.15691-.1004.10044-.1569.23673-.1569.3788s.0565.27836.1569.3788c.1005.10045.2368.15691.3788.15691h1.6072c.1421 0 .2783-.05646.3788-.15691.1004-.10044.1569-.23673.1569-.3788s-.0565-.27836-.1569-.3788c-.1005-.10045-.2367-.15691-.3788-.15691zm-3.1768-2.71608c.0705.00041.1404-.0131.2057-.03976.0652-.02666.1246-.06594.1747-.11559l1.1357-1.14107c.0561-.04803.1016-.10713.1337-.17359.0322-.06646.0503-.13886.0531-.21264.0029-.07378-.0096-.14735-.0365-.21609-.0269-.06875-.0678-.13118-.12-.18339s-.1147-.09306-.1834-.11999-.1423-.03937-.2161-.03652-.1461.02092-.2126.05307c-.0664.03216-.1256.07771-.1736.13379l-1.1411 1.13571c-.0502.0498-.09.10905-.1172.17433-.0272.06529-.0412.13531-.0412.20603s.014.14074.0412.20602c.0272.06529.067.12454.1172.17434.0501.04965.1095.08893.1747.11559.0653.02666.1352.04017.2057.03976z" />
    </g>
  </svg>
);