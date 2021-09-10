import { ShowDarkTheme } from '@store/atoms/ShowDarkTheme.atom';

import { useRecoilValue } from 'recoil';
import { LIGHT_GRAYISH_YELLOW, VERY_DARK_BLUE } from 'theme';
import { SvgPropsInterface } from 'types';

export const Close = ({ onClick }: SvgPropsInterface): JSX.Element => {
  const isDarkThemeToggled = useRecoilValue(ShowDarkTheme);

  const fill = isDarkThemeToggled ? LIGHT_GRAYISH_YELLOW : VERY_DARK_BLUE;

  return (
    <svg
      fill="none"
      onClick={onClick}
      viewBox="0 0 357 90"
      xmlns="http://www.w3.org/2000/svg">
      <g fill={fill}>
        <path d="m249.08.360001 6.72-.360001h5.28l2.88.120001 4.56.479999c12.24 1.2 14.88 12.48 14.88 22.8 0 1.32.12 4.56-1.92 4.56h-12.12c-1.8 0-2.04-2.16-2.04-3.6l-.12-4.56c-.12-2.64-3.84-2.76-5.64-2.76h-6c-1.44 0-2.88.24-4.32.6-3.12.48-3.6 1.44-3.72 4.44l3.6-2.76c.48-.24 1.56-.24 2.04-.24l-5.76 4.32v1.92l8.28-6.24h1.92l-8.88 6.72h-1.32c0 4.2 1.68 4.8 5.52 5.16l3.84.36h.36v-.12l8.16-6.12c.12.36 0 .84 0 .96v.48l-6.36 4.8-.12.12 2.16.24 4.56-3.48c.12.12.24.48.24.6s.24.36.24.48l-3.24 2.52h.24s1.32.12 2.04.12l2.64-1.92h1.92l-2.88 2.16 1.92.24h.24l3.24-2.4h1.2v.48l-3 2.28 1.8.36c.48 0 .72-.6 1.2-.72v1.08h.12c10.68 3.48 11.16 12.6 11.16 22.2 0 24.96-10.2 25.56-31.44 25.56l-6.36-.48c-10.2-.72-15.36-9.72-15.6-19.2l-.12-5.64v-.6c0-1.68.12-3.24 1.8-3.84h1.56l4.8-3.48c.36 0 .84.24 1.2.48l-4.08 3h2.52l3.36-2.4 1.44.36-2.88 2.04h2.52l2.4-1.8 1.56.24-2.04 1.56c.6.12.96.36 1.44.84l2.76-2.04v-.12l1.68.24-3.96 3c-.12.24-.12.36-.12.36 0 .24.12 1.2.12 1.44l6.24-4.56.12-.12c.48 0 1.08.12 1.56.12l-7.92 6v.72c0 4.44 0 6.12 5.16 6.6 1.92.24 3.72.24 5.64.24h.6v-1.08l8.04-6c.12.24.12.6.12.96v.36l-7.68 5.76h.84.84.84l5.04-3.72v.24c0 .24 0 .96-.12 1.08l-2.64 2.16c.72 0 1.32-.36 1.92-.48 3-1.08 2.76-4.2 2.88-6.84 0-1.44-.12-2.76-.24-4.2-.48-2.88-2.88-3.48-5.4-3.6l-6.24-.24-6.48-.48-4.92-.84c-9.12-1.32-13.44-10.2-13.8-18.6l-.12-4.68c0-12.36 3.6-22.8 17.64-23.639999zm-17.28 11.759999-7.56 5.64c0-.36 1.32-2.16 1.8-2.76l5.52-4.2c.12-.12 1.08-.48 1.2-.48zm-8.88 8.52 7.92-5.88v.12s-.36 1.08-.48 1.68l-7.92 5.88v-.36c.12-.24.36-1.2.48-1.44zm-.96 3.96 8.04-6-.24 1.68-8.04 6 .24-1.56zm29.28 1.08 8.76-6.48v-.12c.72 0 1.08 0 1.8.24l-8.76 6.48h-.48s-1.08 0-1.32-.12zm3.84.48 8.52-6.36c.36 0 .84.36 1.08.6l-8.28 6.24c-.6-.24-.96-.36-1.32-.48zm1.92 1.8 8.28-6.12v1.2.24l-8.16 6c0-.36-.12-.84-.12-1.32zm-35.52 1.56v-1.2l8.04-6.12v.36c0 .36.24.96-.12 1.2l-7.92 6zm-.12 2.16 8.04-6h.12v1.32l-8.04 6-.12.12zm.12 3.24 8.04-6c.12.36.12.72.12 1.08v.24l-8.04 6c-.12-.12-.24-.96-.24-1.2 0-.12 0-.12.12-.12zm.24 3.12 8.04-6c.12.48.24 1.32.24 1.32l-8.28 6.12c0-.24-.12-1.08-.12-1.32zm.36 3 8.16-6 .12.96.12.12s-.12 0-.12.12l-8.16 6c0-.24-.12-.84-.12-1.2zm.48 2.76h.12l8.16-6.12.36 1.2-8.28 6.12c0-.12-.12-.36-.12-.48-.12-.12-.24-.72-.24-.72zm.96 2.64 8.16-6.12h.12l.48.96-8.28 6.24c-.12-.24-.36-.6-.48-1.08zm1.2 2.4 8.28-6.12.12-.12v.12l.6.84-8.4 6.24s-.36-.6-.6-.96zm1.56 2.16 8.4-6.24.84.84-8.52 6.24s-.36-.48-.72-.84zm2.04 1.8 8.4-6.24 1.08.6-8.4 6.36c-.36-.12-.96-.48-1.08-.72zm20.52 4.56 8.64-6.6h.12.24.72.84l-8.76 6.6c-.12.12 0 0-.12 0zm5.64.36-1.56-.24 8.76-6.48c.36 0 1.08.12 1.44.24zm1.8.48 8.52-6.36c.48 0 .96.72.96.72l-8.28 6.24c-.36-.24-1.08-.48-1.2-.6zm1.8 1.92 8.16-6.12h.12c.24.24.12.84.12 1.2v.12l-8.16 6.12c0-.48-.12-.84-.24-1.32zm-36.72 1.2 1.56-1.2h1.92l-3.84 2.88c0-.36.12-1.56.36-1.68zm-.36 3.6 6.36-4.8h1.8v.12l-8.16 6.12zm0 3.24 8.16-6.12c0 .24.12.96.12 1.44l-8.16 6.12c-.12-.48-.12-.84-.12-1.44zm.24 3.12 8.16-6s.12.84.12 1.32l-8.16 6s-.12-.72-.12-1.32zm.36 3 8.16-6.12c.12.48.36 1.2.36 1.32l-8.28 6.12-.24-1.2zm.96 4.08-.36-1.2 8.16-6.12h.12l.36 1.08zm1.08 2.4-.48-.96 8.28-6.24c.12 0 .12 0 .12.12l.48.84zm.84 1.2 8.28-6.12.6.84v.12l-8.28 6.24-.6-.96zm1.44 2.28 8.4-6.24.12-.12.84.84-8.52 6.36-.48-.48c0-.12-.24-.36-.36-.36zm2.04 1.8 8.4-6.24.12-.12.96.72-8.52 6.36s-.36-.36-.6-.48c0 0-.36-.12-.36-.24zm2.52 1.44 8.4-6.36h.12l1.2.48-8.52 6.36-.12.12c-.24 0-.96-.36-1.08-.6zm28.44 1.92h-.12l9-6.72c.12-.12 1.32-.36 1.56-.36.12-.12 1.08-.36 1.32-.36l-9.36 6.96c-.12.12-2.16.48-2.4.48zm-25.56-.72 8.64-6.48 1.44.36-8.76 6.48c-.36 0-.96-.12-1.32-.36zm3.48.72h-.12l8.64-6.48c.12-.12.12 0 .24 0 .48 0 1.08 0 1.56.12l-8.76 6.48c-.6 0-1.44-.12-1.56-.12zm16.92.48 8.88-6.6c.24-.24 1.8-.24 2.16-.24l-8.88 6.6c0 .12-1.2.12-2.16.24zm-12.96-.12h-.12l8.76-6.6h.24c.48 0 1.08 0 1.56.12l-8.76 6.6h-.24c-.24 0-1.32-.12-1.44-.12zm8.4.24 8.76-6.6h.12c0-.12 1.08-.12 1.92-.12l-8.88 6.72zm-4.32-.12 8.76-6.48h1.92l-8.88 6.6h-.48c-.48 0-.84 0-1.32-.12z" />
        <path d="m10.68 21.72c2.64-19.56 12.72-21.72 30.36-21.72.48 0 2.16.00000084 2.4.120001l5.88.359999c11.28.72 15.12 13.32 15.12 22.92v5.16c0 1.08-.96 2.4-2.04 2.4h-11.88c-1.32 0-2.04-1.56-2.04-2.64v-5.64c0-3.84-1.68-4.8-5.4-4.92-.6 0-3.6-.12-4.2-.12h-.84-3.36c-2.52.12-6.12.36-7.32 3.12.12-.12.48-.24.6-.24-.96.84-1.32 1.44-1.32 2.88l4.8-3.6c.72-.12 1.32-.12 2.04-.12l-7.08 5.28c-.24.96-.24 4.32-.24 5.28v19.8c0 2.16.12 4.32.24 6.36.6 5.28 2.16 6.6 7.44 7.08 1.32 0 2.64.12 4.08.12h.96c.24 0 .24 0 .36-.12l7.92-5.88v.36.48.6l-6 4.44c.84 0 1.8 0 2.64-.12l3.12-2.28c0 .48-.24 1.08-.48 1.56 1.92 0 2.64-4.92 2.64-6.24v-5.64c0-1.08.96-2.4 2.16-2.4h11.76c1.08 0 2.16 1.2 2.16 2.28v7.44c0 12-4.08 21.48-17.64 22.56l-9.48.72c-10.2 0-19.92-.24-24.84-10.8-1.2-2.76-2.04-5.88-2.4-8.76l-.48-4.68-.24-5.52v-21.84c0-2.64.24-5.4.6-8.04zm.96-8.76-7.68 5.76c0-.12 1.68-2.52 2.04-2.88l6.36-4.8c.12-.12.36-.12.48-.12l-.24.36c-.12.24-.84 1.44-.96 1.68zm-1.8 4.68-7.8 5.88c0-.24.48-1.56.6-1.92l7.92-5.76zm19.32 8.64h-1.92l8.88-6.6h.48.48.84zm2.4 0 8.88-6.6c.48 0 1.2.12 1.68.12l-8.64 6.48-.12.12c-.24 0-1.56 0-1.8-.12zm-30.24-.36 8.04-6-.36 1.68-8.04 6c0-.12 0-.24.12-.36 0-.36.24-1.32.24-1.32zm34.2.84v-.12l8.52-6.36c.48 0 .96.24 1.2.6l-8.52 6.24c-.36-.12-.84-.24-1.2-.36zm2.28 1.56 8.28-6.24c.12-.12.36 1.08.36 1.2l-8.28 6.12c0-.36-.24-.72-.36-1.08zm-37.32 3 .12-1.56 8.04-6-.12 1.56zm37.92-.12 8.16-6.12v1.44l-8.16 6zm-38.04 2.16 7.8-6h.12v.24 1.2l-8.16 6.12c0-.24.12-1.32.24-1.56zm38.04 1.08 8.16-6.12v1.44l-8.16 6.12zm-38.28 2.28 8.04-6v.48 1.08l-8.16 6c0-.36-.00000011-1.08.12-1.56zm38.4.96 8.16-6.12c.24.36.48.6.72.84l-8.4 6.36c-.12-.12-.6-.96-.48-1.08zm1.92 1.92 8.76-6.6h1.92l-8.76 6.6zm4.32 0 8.88-6.6h.72v.84l-7.68 5.76zm-44.76 1.92v-1.32l8.16-6.12v1.32zm49.2-1.92 5.16-3.84v1.44l-3.24 2.4zm-49.2 5.16v-1.44l8.16-6v1.44zm0 1.92 8.16-6.12v1.44l-8.16 6.12zm0 3.24 8.16-6v1.44l-8.16 6zm0 4.8v-1.44l7.92-6c.12 0 .12-.12.24-.12v1.44zm0 3.24v-1.44l7.92-5.88c.12 0 .12-.12.24-.12v1.44zm0 1.92 8.16-6.12v.12 1.32l-8.16 6.12v-1.08zm.12 3.24 8.16-6.12v1.2.24l-8.16 6zm38.88-1.44v-1.32l4.32-3.24h1.92zm1.8-4.56-1.32.96c.36-.48.84-.84 1.32-.96zm-40.44 9.12 8.04-6c.12.36.24.84.24 1.2l-8.16 6.12c-.12-.24-.12-.96-.12-1.32zm.36 3 8.04-6c.12.36.24.72.24 1.2 0 .12 0 .12-.12.12l-8.04 6c-.12-.24-.12-.96-.12-1.32zm.48 3 8.04-6v-.12c.12.36.24 1.08.24 1.32l-8.16 6.12c-.12-.36-.24-1.08-.24-1.2zm.48 2.88h.12l8.16-6.12.36 1.08-8.28 6.24c-.12-.48-.36-1.2-.36-1.2zm.96 2.52 8.28-6.12c.12.36.48.84.36 1.08l-8.28 6.24-.36-.96zm1.08 2.52 8.28-6.24.6 1.08-8.4 6.12s-.24-.36-.36-.6c0-.12-.12-.36-.12-.36zm2.04 3.24-.72-.96 8.4-6.24c.24.24.72.84.72.84l-8.28 6.24zm.96 1.08 8.4-6.24v-.12c.24.12.72.72.96.84l-8.4 6.36h-.12zm2.04 1.8 8.52-6.36c.12 0 .96.48 1.08.6l-8.52 6.36c-.12 0-.96-.48-1.08-.6zm2.52 1.44 8.52-6.48h.12l1.2.6-8.64 6.36c-.36-.12-1.08-.36-1.2-.48zm29.28 1.2 9.12-6.84c.72-.12 1.44-.36 2.04-.6h.12c-.12.24-.24.48-.48.6l-8.28 6.24c-.12.12-2.16.6-2.4.6zm-26.28-.12 8.52-6.36c.12-.12 0-.12.24-.12l1.32.36-8.64 6.48c-.6-.12-1.32-.36-1.44-.36zm21.12.72 8.88-6.72c.24-.12 1.92-.24 2.16-.24h.12l-9 6.72zm-17.76 0h.12l8.64-6.48c.6 0 1.2 0 1.68.12l-8.64 6.48c-.12.12-.12.12-.24.12-.24 0-1.08-.12-1.56-.24zm14.76.24-1.92.12 8.88-6.72c.24-.12.84-.12 1.32-.12h.84l-8.88 6.6c0 .12-.12.12-.24.12zm-10.8.12 8.76-6.48v-.12c.6 0 1.32 0 1.92.12l-8.88 6.6h-.36-.48-.84zm4.32.12 8.76-6.6h.12 1.56.36l-8.88 6.6z" />
        <path d="m186.31 0 4.8.360001c13.56 1.079999 19.08 10.079999 19.68 22.559999l.24 4.44v25.32c0 2.64-.12 5.52-.6 8.04l-.6 3.48c-2.52 14.64-14.28 17.16-26.76 17.16-18.72 0-27-5.52-27.72-24.36l-.24-4.8v-24.24c0-2.16.12-4.44.36-6.6l.6-3.96c2.28-17.159998 16.32-17.4 30.24-17.4zm-35.76 15.12 5.28-3.96c.36-.24.84-.48 1.32-.48l-.84 1.56-7.68 5.76c.48-1.08 1.2-1.92 1.92-2.88zm-3.24 5.76 7.92-6-.48 1.8c-.12 0-.12.12-.12.12l-7.92 5.88.12-.24c0-.24.36-1.32.48-1.56zm24.6 1.2 2.76-2.04c.12-.12 2.04-.36 2.28-.36h.12l-5.52 4.08c0 .12-.12.12-.12.24l-.12 1.92 8.28-6.24h1.92l-8.76 6.6h-1.44l-.12 2.76v22.44c0 .36 0 3 .12 3.72.36 7.8 2.76 8.28 9.6 8.52.48 0 6 0 6.24-.24l5.28-3.96c.24-.12.12 0 .24 0 0 .12-.36 1.56-.6 1.68l-2.64 2.04c4.8 0 5.64-7.8 5.64-11.52v-24l-.24-3.48c-.48-5.76-3.96-6.6-9.24-6.6h-2.52-2.64c-2.88 0-6.84.36-8.16 3.36-.24.36-.36.72-.36 1.08zm-25.68 2.88 7.92-5.88-.24 1.56-7.92 5.88-.12.12c0-.24.24-1.2.36-1.68zm29.04 1.32 8.64-6.6c.72 0 1.44 0 1.92.12l-8.76 6.48zm5.4.72-1.44-.36 8.52-6.48c.12-.12.12-.12.24-.12.36 0 .96.24 1.32.48zm1.56.6 8.52-6.36s.24.12.24.24c.12.12.36.36.48.72l-8.28 6.12c-.36-.24-.6-.48-.96-.72zm-10.44-5.4c.12 0 .12-.12 0-.12zm-26.4 8.16.12-1.56 8.04-6.12c0 .48 0 1.08-.12 1.56zm38.52-.72 8.28-6.12v-.12c.12.12.24.48.24.6.12.12.24.6.24.6l-8.28 6.12c-.12-.36-.48-1.08-.48-1.08zm-38.76 3.84c0-.48.12-1.2.12-1.2l8.04-6v.24c0 .36 0 .6-.12 1.2l-8.04 6zm39.6-1.08 8.04-6.12c.12.24.24 1.08.24 1.32h-.12l-8.04 6.12c-.12-.12-.12-.84-.12-1.32zm.24 3.12 8.04-6v-.12c.12.36.12.72.12 1.08v.36l-8.16 6c-.12-.36 0-.84 0-1.2zm-39.96.96c0-.24-.12-.84.12-.96l8.04-6v1.44l-8.16 6.12zm39.96 3.72v-1.44l8.04-6h.12v1.44zm-39.96.12v-1.44l8.04-5.88s0-.12.12-.12v1.44zm39.96 1.8 8.16-6.12v1.32l-8.16 6.12zm-39.96 1.56v-1.44l8.16-6.12v1.44zm39.96 3v-1.44l8.16-6v1.44zm-39.96-1.08 8.16-6.12v1.44l-8.16 6.12zm39.96 4.44v-1.44l8.16-6.12v1.44zm-39.96-1.2 8.16-6.12v1.44l-8.16 6.12zm48.12-3v1.44l-8.16 6.12v-1.44zm-48.12 7.8v-1.44l8.16-6.12v1.44zm39.96 3v-1.44l8.16-6v1.44zm-39.96-1.2 8.16-6v1.44l-8.16 6zm39.96 4.44v-1.32l8.16-6.12v1.32c0 .12-.12.12-.12.24l-7.92 5.88c-.12 0-.12.12-.12.12zm-39.96-1.08 8.16-6.12v1.44l-8.16 6.12zm39.96 3 8.04-6c0 .72-.12 1.56-.12 1.56l-8.04 6v-.12c0-.36-.12-1.2.12-1.44zm-39.96.24 8.16-6v-.12c.12.48.12.96.12 1.44l-8.16 6.12c0-.48-.12-.72-.12-1.2zm.24 3.24 8.16-6.12s0 .96.12 1.32l-8.28 6.12zm.24 3 8.04-6h.12c0 .36.12 1.08.12 1.32l-8.04 6c-.12-.12-.24-.96-.24-1.32zm.36 3.12 8.04-6.12h.24l.12 1.08v.12l-8.16 6.12-.24-1.08zm.6 2.76 8.16-6.12.36 1.2-8.28 6.12c-.12-.36-.24-1.2-.24-1.2zm.72 2.76 8.28-6.24c.12.24.36.84.36 1.2l-8.28 6.12s0-.24-.12-.36c0-.12-.24-.72-.24-.72zm1.08 2.52 8.28-6.24.6 1.08-8.4 6.24c-.12-.36-.48-.84-.48-1.08zm1.92 3.24-.72-.84 8.4-6.36c.12.12.6.72.6 1.08l-8.16 6.12zm1.8 2.04-.84-.84 8.28-6.24c.12-.12.24-.12.24-.12l.72.84zm1.2.96 8.4-6.24.12-.12.96.6-8.52 6.48s-.36-.36-.6-.48zm2.4 1.56v-.12l8.52-6.36h.12l1.2.48-8.52 6.36-.12.12c-.12 0-1.08-.48-1.2-.48zm28.2 1.92 9-6.84c.96-.24 2.04-.48 3-.84l-9.24 6.96c-.24.12-2.52.72-2.76.72zm-25.2-.84h-.12l8.52-6.36c.12-.12.24-.12.24-.12l1.32.36-8.64 6.48c-.36 0-1.2-.24-1.32-.36zm4.56 1.08-1.32-.24 8.64-6.48c.36 0 1.32.12 1.68.12l-8.64 6.48c-.12.12-.12.12-.36.12zm17.4.24-2.16.12 8.88-6.6s.12-.12.24-.12l2.04-.24zm-15 0 8.76-6.6c.24.12 1.44.12 1.68.12l-8.76 6.6c-.6 0-1.56-.12-1.68-.12zm10.08.36h-1.68l8.76-6.6c.12-.12 1.2-.12 1.44-.12h.36zm-6 0 8.64-6.6h.12.48 1.32l-8.76 6.6h-.48z" />
        <path d="m89.76 63.84v-46.56l-2.88-.84c-.96-.36-1.68-1.32-1.68-2.28v-11.88c0-.84.84-2.28 1.8-2.28h21.96c1.08 0 1.92 1.44 1.92 2.4v11.4c0 2.76-2.64 2.88-4.68 3.48h-.12v46.08h14.64l.96-3.96c.12-.72.96-1.8 1.8-1.8h9.36c.96 0 1.92 1.32 1.92 2.28v19.2c0 .84-.96 2.16-1.92 2.16h-45.72c-.96 0-1.92-1.44-1.92-2.4v-11.76c0-.96.72-1.92 1.56-2.16zm-14.76-52.2 3.84-2.88h1.92l-5.76 4.32zm0 4.8v-1.44l8.04-6.12h.12v1.32zm0 1.92 8.16-6.24v1.44l-8.16 6.24zm0 3.24 8.16-6v-.12c.12.48.12.96.24 1.32l-8.4 6.24zm.6 3 8.64-6.48c.36.24.72.36 1.2.48l-8.76 6.6c-.36 0-.84-.36-1.08-.6zm4.08 1.44-1.2-.36 8.76-6.48c.12 0 .6.12.6.12v.84l-8.16 6.12zm0 2.16 8.16-6.12v1.32l-8.16 6.12zm0 4.68v-1.44l8.16-6.12v1.44zm0 1.92 8.16-6.12v1.44l-8.16 6.12zm0 3.36 8.16-6.12v1.44l-8.16 6.12zm0 4.8v-1.44l8.16-6.12v1.44zm0 3.36v-1.44l8.16-6.12v1.44zm0 1.92 8.16-6.24v1.56l-8.16 6.12zm0 4.8v-1.44l8.16-6.24v1.56zm0 3.36v-1.44l8.16-6.24v1.44zm0 1.92 8.16-6.24v1.44l-8.16 6.24zm0 3.24 8.16-6.12v1.44l-8.16 6.24zm0 4.92v-1.56l8.16-6.12v1.44zm0 1.8 8.16-6.12v1.32l-8.16 6.24zm0 4.44v-1.08l3.6-2.76c0 .6 0 1.44-.12 1.44l-8.16 6.24v-.36c0-.48 0-1.08.36-1.44l1.68-1.2zm-4.68 7.2v-1.56l8.16-6.12v1.44zm8.16-4.32v1.44l-8.16 6.12v-1.44zm-8.16 9.48 8.16-6.12v1.44l-8.16 6.12zm.12 3.24 8.28-6.24h.12c.24.36.48.6.84.84l-8.64 6.48c-.12-.12-.6-.96-.6-1.08zm2.28 1.68 9-6.72h1.92l-8.88 6.72zm6.48 0h-1.92l8.88-6.72h1.92zm2.52 0 8.88-6.72h2.04l-9 6.72zm4.44 0 9-6.72h1.92l-8.88 6.72zm4.56 0 8.88-6.72h1.92l-8.88 6.72zm6.36 0h-1.92l8.88-6.72h2.04zm2.52 0 9-6.72h1.68l-8.88 6.72zm4.32 0 8.88-6.72h2.04l-9 6.72zm4.44 0 9-6.72h1.92l-8.88 6.72zm6.48 0h-1.92l6.96-5.28v1.44zm2.52 0 2.52-1.92c0 1.08-1.2 1.92-2.16 1.92z" />
        <path d="m309.76 63.84v-46.56l-3.12-1.08c-.84-.24-1.44-1.32-1.44-2.16v-11.64c0-.84.84-2.4 1.8-2.4h47.64c.96 0 1.8 1.32 1.8 2.16v19.2c0 .84-.96 2.16-1.8 2.16h-9.6c-.96 0-1.68-1.2-1.8-1.92l-.84-3.72h-16.32v2.04h1.8l-1.8 1.32v1.92l4.32-3.24h1.92l-6.24 4.68v1.92l8.76-6.6h2.04l-9 6.72h-1.8v4.68h7.32l-.12-.12.12-.12 8.4-6.24c.24.24.6.48.96.72l-7.68 5.76h2.52l7.56-5.64h1.08v.6l-6.72 5.04h1.32c.24 0 .48.24.84.24l4.56-3.36v1.44l-3.6 2.76h-.36c.12.36.36.72.36 1.2v12.84c0 1.2-.96 2.28-2.16 2.28h-14.4v2.04h.72c-.12.12-.6.48-.72.6v1.8l3.24-2.4h1.92l-5.16 3.96v1.8l6.36-4.68v1.44l-5.64 4.2h-.72v5.88h16.56l.96-3.96c.12-.72.84-1.8 1.8-1.8h9.36c.96 0 1.92 1.32 1.92 2.28v19.2c0 .84-.96 2.16-1.92 2.16h-47.64c-.96 0-1.92-1.44-1.92-2.4v-12c-.6.24-1.2.48-1.56 1.08-.12.12-.12.36-.24.48l-3.72 2.76v-1.44l8.16-6.12v.96c.24-.12 1.56-.48 1.92-.72zm-12.84-55.08h1.32l-3.24 2.4c0-.96.84-2.4 1.92-2.4zm-1.92 5.76v-1.44l5.76-4.32h1.92zm0 1.92 8.16-6.24v1.56l-8.16 6.12zm0 4.8v-1.44l8.04-6.12h.12v1.44zm0 1.8 8.28-6.12c.36.36.48.6.72.96l-8.52 6.24c-.12 0-.48-.84-.48-1.08zm3.12 2.52-1.32-.48 8.64-6.48h.12l1.32.36zm32.28 1.08 9-6.72h.96c.12.12.12.36.12.6l-8.16 6.12h-.12zm-30.72 1.2v-1.56l8.16-6.12v1.44zm33.12 1.8-.24-1.32 8.28-6.12.12-.12.24 1.32zm-33.12 0 8.16-6.12v1.32l-8.16 6.12zm0 3.24 8.16-6.12v1.44l-8.16 6.12zm0 4.8v-1.44l8.16-6.12v1.44zm0 3.36v-1.44l8.16-6.12v1.44zm0 1.92 8.16-6.12v1.44l-8.16 6.12zm0 4.8v-1.44l8.16-6.12v1.44zm0 3.36v-1.44l8.16-6.12v1.44zm0 1.92 8.16-6.24v1.56l-8.16 6.12zm0 3.36 8.16-6.24v1.56l-8.16 6.12zm0 4.8v-1.44l8.16-6.24v1.56zm30.96-3.72h-1.32l3.12-2.28c0 .96-.72 2.28-1.8 2.28zm-30.96 5.64 8.16-6.24v1.44l-8.16 6.24zm0 3.24 8.16-6.12v1.44l-8.16 6.24zm3.48 3.96v1.44l-8.16 6.24v-1.44zm-8.16 9.6 8.16-6.24v1.44l-8.16 6.24zm0 4.8v-1.56l8.16-6.12v1.44zm0 1.8 8.16-6.12c.12.48.24.84.24 1.32l-.12.12-8.16 6-.12.12zm.72 2.88 8.52-6.36c.6.24.96.24 1.56.24l-8.88 6.72c-.48 0-.96-.36-1.2-.6zm3.72.6 8.88-6.72h1.92l-8.88 6.72zm6.36 0h-1.92l8.88-6.72h2.04zm4.44 0h-1.92l8.76-6.6c.12-.12.24-.12.24-.12h1.92zm2.52 0 9-6.72h1.92l-8.76 6.6-.12.12zm4.56 0 8.88-6.72h1.92l-8.88 6.72zm6.36 0h-1.92l8.88-6.72h2.04zm2.52 0 9-6.72h1.68l-8.88 6.72zm6.24 0h-1.92l8.88-6.72h2.04zm2.52 0 9-6.72h1.92l-8.88 6.72zm4.56 0 6.96-5.28v1.44l-5.04 3.84zm4.44 0 2.52-1.8c0 .96-1.2 1.8-2.16 1.8z" />
      </g>
    </svg>
  );
};
