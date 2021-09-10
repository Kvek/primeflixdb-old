import { ShowDarkTheme } from '@store/atoms/ShowDarkTheme.atom';

import { useRecoilValue } from 'recoil';
import { LIGHT_GRAYISH_YELLOW, MODERATE_CYAN, VERY_DARK_BLUE } from 'theme';
import { SvgPropsInterface } from 'types';

export const Search = ({
  isActive,
  onClick,
}: SvgPropsInterface & { isActive: boolean }): JSX.Element => {
  const isDarkThemeToggled = useRecoilValue(ShowDarkTheme);

  const fill = isDarkThemeToggled ? LIGHT_GRAYISH_YELLOW : VERY_DARK_BLUE;

  return (
    <svg
      className="icons"
      fill="none"
      onClick={onClick}
      viewBox="0 0 462 90"
      xmlns="http://www.w3.org/2000/svg">
      <title>Click to search</title>

      <g fill={isActive ? MODERATE_CYAN : fill}>
        <path d="m28.08.360001 6.72-.360001h5.28l2.88.120001 4.56.479999c12.24 1.2 14.88 12.48 14.88 22.8 0 1.32.12 4.56-1.92 4.56h-12.12c-1.8 0-2.04-2.16-2.04-3.6l-.12-4.56c-.12-2.64-3.84-2.76-5.64-2.76h-6c-1.44 0-2.88.24-4.32.6-3.12.48-3.6 1.44-3.72 4.44l3.6-2.76c.48-.24 1.56-.24 2.04-.24l-5.76 4.32v1.92l8.28-6.24h1.92l-8.88 6.72h-1.32c0 4.2 1.68 4.8 5.52 5.16l3.84.36h.36v-.12l8.16-6.12c.12.36 0 .84 0 .96v.48l-6.36 4.8-.12.12 2.16.24 4.56-3.48c.12.12.24.48.24.6s.24.36.24.48l-3.24 2.52h.24s1.32.12 2.04.12l2.64-1.92h1.92l-2.88 2.16 1.92.24h.24l3.24-2.4h1.2v.48l-3 2.28 1.8.36c.48 0 .72-.6 1.2-.72v1.08h.12c10.68 3.48 11.16 12.6 11.16 22.2 0 24.96-10.2 25.56-31.44 25.56l-6.36-.48c-10.2-.72-15.36-9.72-15.6-19.2l-.12-5.64v-.6c0-1.68.12-3.24 1.8-3.84h1.56l4.8-3.48c.36 0 .84.24 1.2.48l-4.08 3h2.52l3.36-2.4 1.44.36-2.88 2.04h2.52l2.4-1.8 1.56.24-2.04 1.56c.6.12.96.36 1.44.84l2.76-2.04v-.12l1.68.24-3.96 3c-.12.24-.12.36-.12.36 0 .24.12 1.2.12 1.44l6.24-4.56.12-.12c.48 0 1.08.12 1.56.12l-7.92 6v.72c0 4.44 0 6.12 5.16 6.6 1.92.24 3.72.24 5.64.24h.6v-1.08l8.04-6c.12.24.12.6.12.96v.36l-7.68 5.76h.84.84.84l5.04-3.72v.24c0 .24 0 .96-.12 1.08l-2.64 2.16c.72 0 1.32-.36 1.92-.48 3-1.08 2.76-4.2 2.88-6.84 0-1.44-.12-2.76-.24-4.2-.48-2.88-2.88-3.48-5.4-3.6l-6.24-.24-6.48-.48-4.92-.84c-9.12-1.32-13.44-10.2-13.8-18.6l-.12-4.68c0-12.36 3.6-22.8 17.64-23.639999zm-17.28 11.759999-7.56 5.64c0-.36 1.32-2.16 1.8-2.76l5.52-4.2c.12-.12 1.08-.48 1.2-.48zm-8.88 8.52 7.92-5.88v.12s-.36 1.08-.48 1.68l-7.92 5.88v-.36c.12-.24.36-1.2.48-1.44zm-.96 3.96 8.04-6-.24 1.68-8.04 6 .24-1.56zm29.28 1.08 8.76-6.48v-.12c.72 0 1.08 0 1.8.24l-8.76 6.48h-.48s-1.08 0-1.32-.12zm3.84.48 8.52-6.36c.36 0 .84.36 1.08.6l-8.28 6.24c-.6-.24-.96-.36-1.32-.48zm1.92 1.8 8.28-6.12v1.2.24l-8.16 6c0-.36-.12-.84-.12-1.32zm-35.52 1.56v-1.2l8.04-6.12v.36c0 .36.24.96-.12 1.2l-7.92 6zm-.12 2.16 8.04-6h.12v1.32l-8.04 6-.12.12zm.12 3.24 8.04-6c.12.36.12.72.12 1.08v.24l-8.04 6c-.12-.12-.24-.96-.24-1.2 0-.12 0-.12.12-.12zm.24 3.12 8.04-6c.12.48.24 1.32.24 1.32l-8.28 6.12c0-.24-.12-1.08-.12-1.32zm.36 3 8.16-6 .12.96.12.12s-.12 0-.12.12l-8.16 6c0-.24-.12-.84-.12-1.2zm.48 2.76h.12l8.16-6.12.36 1.2-8.28 6.12c0-.12-.12-.36-.12-.48-.12-.12-.24-.72-.24-.72zm.96 2.64 8.16-6.12h.12l.48.96-8.28 6.24c-.12-.24-.36-.6-.48-1.08zm1.2 2.4 8.28-6.12.12-.12v.12l.6.84-8.4 6.24s-.36-.6-.6-.96zm1.56 2.16 8.4-6.24.84.84-8.52 6.24s-.36-.48-.72-.84zm2.04 1.8 8.4-6.24 1.08.6-8.4 6.36c-.36-.12-.96-.48-1.08-.72zm20.52 4.56 8.64-6.6h.12.24.72.84l-8.76 6.6c-.12.12 0 0-.12 0zm5.64.36-1.56-.24 8.76-6.48c.36 0 1.08.12 1.44.24zm1.8.48 8.52-6.36c.48 0 .96.72.96.72l-8.28 6.24c-.36-.24-1.08-.48-1.2-.6zm1.8 1.92 8.16-6.12h.12c.24.24.12.84.12 1.2v.12l-8.16 6.12c0-.48-.12-.84-.24-1.32zm-36.72 1.2 1.56-1.2h1.92l-3.84 2.88c0-.36.12-1.56.36-1.68zm-.36 3.6 6.36-4.8h1.8v.12l-8.16 6.12zm0 3.24 8.16-6.12c0 .24.12.96.12 1.44l-8.16 6.12c-.12000011-.48-.12-.84-.12-1.44zm.24 3.12 8.16-6s.12.84.12 1.32l-8.16 6s-.12-.72-.12-1.32zm.36 3 8.16-6.12c.12.48.36 1.2.36 1.32l-8.28 6.12-.24-1.2zm.96 4.08-.36-1.2 8.16-6.12h.12l.36 1.08zm1.08 2.4-.48-.96 8.28-6.24c.12 0 .12 0 .12.12l.48.84zm.84 1.2 8.28-6.12.6.84v.12l-8.28 6.24-.6-.96zm1.44 2.28 8.4-6.24.12-.12.84.84-8.52 6.36-.48-.48c0-.12-.24-.36-.36-.36zm2.04 1.8 8.4-6.24.12-.12.96.72-8.52 6.36s-.36-.36-.6-.48c0 0-.36-.12-.36-.24zm2.52 1.44 8.4-6.36h.12l1.2.48-8.52 6.36-.12.12c-.24 0-.96-.36-1.08-.6zm28.44 1.92h-.12l9-6.72c.12-.12 1.32-.36 1.56-.36.12-.12 1.08-.36 1.32-.36l-9.36 6.96c-.12.12-2.16.48-2.4.48zm-25.56-.72 8.64-6.48 1.44.36-8.76 6.48c-.36 0-.96-.12-1.32-.36zm3.48.72h-.12l8.64-6.48c.12-.12.12 0 .24 0 .48 0 1.08 0 1.56.12l-8.76 6.48c-.6 0-1.44-.12-1.56-.12zm16.92.48 8.88-6.6c.24-.24 1.8-.24 2.16-.24l-8.88 6.6c0 .12-1.2.12-2.16.24zm-12.96-.12h-.12l8.76-6.6h.24c.48 0 1.08 0 1.56.12l-8.76 6.6h-.24c-.24 0-1.32-.12-1.44-.12zm8.4.24 8.76-6.6h.12c0-.12 1.08-.12 1.92-.12l-8.88 6.72zm-4.32-.12 8.76-6.48h1.92l-8.88 6.6h-.48c-.48 0-.84 0-1.32-.12z" />
        <path d="m88.3601 63.84v-46.56l-3.12-1.08c-.84-.24-1.44-1.32-1.44-2.16v-11.64c0-.84.84-2.4 1.8-2.4h47.6399c.96 0 1.8 1.32 1.8 2.16v19.2c0 .84-.96 2.16-1.8 2.16h-9.6c-.96 0-1.68-1.2-1.8-1.92l-.84-3.72h-16.32v2.04h1.8l-1.8 1.32v1.92l4.32-3.24h1.92l-6.24 4.68v1.92l8.76-6.6h2.04l-9 6.72h-1.8v4.68h7.32l-.12-.12.12-.12 8.4-6.24c.24.24.6.48.96.72l-7.68 5.76h2.52l7.56-5.64h1.08v.6l-6.72 5.04h1.32c.24 0 .48.24.84.24l4.56-3.36v1.44l-3.6 2.76h-.36c.12.36.36.72.36 1.2v12.84c0 1.2-.96 2.28-2.16 2.28h-14.4v2.04h.72c-.12.12-.6.48-.72.6v1.8l3.24-2.4h1.92l-5.16 3.96v1.8l6.36-4.68v1.44l-5.64 4.2h-.72v5.88h16.56l.96-3.96c.12-.72.84-1.8 1.8-1.8h9.36c.96 0 1.92 1.32 1.92 2.28v19.2c0 .84-.96 2.16-1.92 2.16h-47.6399c-.96 0-1.92-1.44-1.92-2.4v-12c-.6.24-1.2.48-1.56 1.08-.12.12-.12.36-.24.48l-3.72 2.76v-1.44l8.16-6.12v.96c.24-.12 1.56-.48 1.92-.72zm-12.84-55.08h1.32l-3.24 2.4c0-.96.84-2.4 1.92-2.4zm-1.92 5.76v-1.44l5.76-4.32h1.92zm0 1.92 8.16-6.24v1.56l-8.16 6.12zm0 4.8v-1.44l8.04-6.12h.12v1.44zm0 1.8 8.28-6.12c.36.36.48.6.72.96l-8.52 6.24c-.12 0-.48-.84-.48-1.08zm3.12 2.52-1.32-.48 8.64-6.48h.12l1.32.36zm32.2799 1.08 9-6.72h.96c.12.12.12.36.12.6l-8.16 6.12h-.12zm-30.7199 1.2v-1.56l8.16-6.12v1.44zm33.1199 1.8-.24-1.32 8.28-6.12.12-.12.24 1.32zm-33.1199 0 8.16-6.12v1.32l-8.16 6.12zm0 3.24 8.16-6.12v1.44l-8.16 6.12zm0 4.8v-1.44l8.16-6.12v1.44zm0 3.36v-1.44l8.16-6.12v1.44zm0 1.92 8.16-6.12v1.44l-8.16 6.12zm0 4.8v-1.44l8.16-6.12v1.44zm0 3.36v-1.44l8.16-6.12v1.44zm0 1.92 8.16-6.24v1.56l-8.16 6.12zm0 3.36 8.16-6.24v1.56l-8.16 6.12zm0 4.8v-1.44l8.16-6.24v1.56zm30.9599-3.72h-1.32l3.12-2.28c0 .96-.72 2.28-1.8 2.28zm-30.9599 5.64 8.16-6.24v1.44l-8.16 6.24zm0 3.24 8.16-6.12v1.44l-8.16 6.24zm3.48 3.96v1.44l-8.16 6.24v-1.44zm-8.16 9.6 8.16-6.24v1.44l-8.16 6.24zm0 4.8v-1.56l8.16-6.12v1.44zm0 1.8 8.16-6.12c.12.48.24.84.24 1.32l-.12.12-8.16 6-.12.12zm.72 2.88 8.52-6.36c.6.24.96.24 1.56.24l-8.88 6.72c-.48 0-.96-.36-1.2-.6zm3.72.6 8.88-6.72h1.92l-8.88 6.72zm6.36 0h-1.92l8.88-6.72h2.04zm4.44 0h-1.92l8.76-6.6c.12-.12.24-.12.24-.12h1.92zm2.52 0 8.9999-6.72h1.92l-8.7599 6.6-.12.12zm4.56 0 8.8799-6.72h1.92l-8.8799 6.72zm6.3599 0h-1.92l8.88-6.72h2.04zm2.52 0 9-6.72h1.68l-8.88 6.72zm6.24 0h-1.92l8.88-6.72h2.04zm2.52 0 9-6.72h1.92l-8.88 6.72zm4.56 0 6.96-5.28v1.44l-5.04 3.84zm4.44 0 2.52-1.8c0 .96-1.2 1.8-2.16 1.8z" />
        <path d="m244.44 63.84v-46.56l-2.88-.84c-.96-.36-1.68-1.32-1.68-2.28v-11.88c0-.84.84-2.28 1.8-2.28h36.36c15 0 20.04 10.08 20.04 23.4v4.92l-.24 6.48c-.24 3.96-2.16 8.52-5.04 11.28-.12.12-.84.6-.84.72.12.12.36.36.48.36 3.6 2.88 4.92 8.28 5.04 12.72l.12 3.96c.48.24 2.4.84 2.88.96.96.36 1.8 1.08 1.8 2.16v12c0 1.08-.96 2.28-2.04 2.28h-16.92c-1.08 0-1.92-1.44-1.92-2.4v-15.48c0-3.24-1.44-7.2-5.16-7.2h-15.48v2.04h1.56l-1.56 1.2v1.92l4.08-3.12h1.92l-6 4.56v1.08l.72.24 7.8-5.88h2.04l-8.4 6.24c1.56.6 2.64 1.2 2.64 3v11.16c0 1.08-.72 2.64-2.04 2.64h-21.72c-1.08 0-1.92-1.32-1.92-2.28v-11.88c0-.96.72-1.92 1.56-2.16zm-14.76-51.36v-1.44l3.12-2.28h1.92zm0 1.92 7.56-5.64h.6v.96l-8.16 6.12zm0 3.36 8.16-6.12v1.44l-8.16 6.12zm0 4.8v-1.44l8.04-6c.24.12.24.96.24 1.32zm.36 1.68 8.52-6.36c.36.24.6.36 1.08.6l-8.64 6.48c-.24 0-.96-.72-.96-.72zm30.72-6.36v3.24c.24-.12 1.44-1.08 1.68-1.2h1.92l-3.6 2.76v1.8l6.12-4.56h1.92l-8.04 6v12.36h12.96l6.12-4.56c0 .36 0 1.44-.24 1.68l-3.72 2.76c5.76 0 5.88-4.32 6-8.64v-1.8c0-1.92 0-3.96-.36-5.88-.48-3.96-3.12-3.96-6.6-3.96h-.72zm-26.76 8.04-1.32-.36 8.64-6.48h.12l1.08.24v.36l-8.28 6.24c-.12 0-.12.12-.24.12zm28.44.72 9-6.72h1.8l-8.88 6.72zm4.44.12h-.12l8.76-6.6c.24 0 1.44.12 1.56.24l-8.64 6.48c0 .12 0 .12-.12.12-.48 0-1.08-.24-1.44-.24zm3.12.84 8.52-6.24c.36.12.72.6.72.84l-8.4 6.24c-.24-.24-.6-.48-.84-.84zm-35.64 1.56v-1.44l8.16-6.12v1.44zm36.96.84 8.28-6.24v.12s.12.72.12 1.32l-8.28 6.12zm-36.96 2.52v-1.44l8.16-6.24v1.56zm37.32.6 8.16-6.12c.12.24.12.84.12 1.32l-8.28 6.24v-1.2zm-37.32 1.32 8.16-6.24v1.56l-8.16 6.12zm37.32 1.92 8.28-6.12v.6.6c0 .12 0 .24-.12.24l-8.16 6.24zm-37.32 2.76v-1.32l8.16-6.24v1.32zm0 3.36v-1.56l8.16-6.12v1.44zm0 1.8 8.16-6.12v1.44l-8.16 6.12zm0 3.36 8.16-6.12v1.44l-8.16 6.12zm0 4.8v-1.44l8.16-6.12v1.44zm0 1.92 8.16-6.12v1.44l-8.16 6.12zm0 3.36 8.16-6.12v1.44l-8.16 6.12zm0 4.8v-1.44l8.16-6.12v1.44zm30.48 2.4 9-6.72c.6 0 1.2 0 1.68.24l-8.76 6.48c-.12.12 0 .12-.12.12-.6 0-1.2-.12-1.8-.12zm-30.48.96v-1.44l8.04-6c0-.12.12-.12.12-.12v1.44zm34.08-.24 8.52-6.48c.12 0 .84.72.84.84l-8.52 6.36c-.24-.24-.48-.48-.84-.72zm1.8 2.04.12-.12 8.28-6.24.36 1.08c0 .12 0 .12-.12.12l-8.16 6.12c-.24-.24-.48-.72-.48-.96zm-35.88.12 8.16-6.12v1.44l-8.16 6.12zm36.72 2.52 8.16-6.12s.12.12.12.24v1.08l-8.28 6.24v-.12zm.12 4.8v-1.56l8.16-6.12v1.44zm-36.84-2.52v-1.44l3.72-2.88c-.12.6-.12 1.08-.24 1.56zm36.84 4.32 8.16-6.12v1.44l-8.16 6.12zm-41.52 2.52v-1.44l8.16-6.24v1.56zm1.56-5.76 2.76-.84-4.32 3.24c0-1.2.6-2.04 1.56-2.4zm39.96 8.04v-1.44l8.16-6.12v1.44zm-33.36-6.6v1.44l-8.16 6.12v-1.32zm33.36 9.96v-1.44l8.16-6.12v1.44zm-41.52.96v-1.44l8.04-6.12h.12v1.44zm41.52.96 8.16-6.12c.12.24.36.96.36 1.2l-8.4 6.24c-.12-.36-.12-.72-.12-1.08zm-41.52.96c0-.12 0-.12.12-.12l8.16-6.12c.24.36.48.6.72.96l-8.4 6.24-.12.12c-.12 0-.48-.96-.48-1.08zm42.48 1.68 8.64-6.48h.36c.36.12.84.12 1.2.12l-8.88 6.72c-.48 0-.84-.12-1.32-.36zm-40.68.24 8.88-6.6h1.92l-8.88 6.72h-1.92zm6.36.12h-1.92l8.88-6.72h1.92zm2.52 0 8.88-6.72h2.04l-9 6.72zm4.44 0 9-6.72h1.44v.36l-8.4 6.36zm33.12 0h-1.92l8.88-6.72h1.92zm4.44 0h-1.92l8.88-6.72h2.04zm9.72-5.4v1.44l-5.16 3.96h-2.04zm-40.8 5.4h-1.92l5.88-4.44v1.44zm38.16 0 2.64-2.04c0 1.08-1.32 2.04-2.28 2.04z" />
        <path d="m159.92 62.76-.48 1.44 1.56-.48.12-.24 16.44-61.56c.12-.72.72-1.92 1.56-1.92h17.4c.72 0 1.44.839999 1.56 1.56l16.56 62.04c.12.12.12.24.12.24l3.36 1.08c.84.24 1.56 1.32 1.56 2.16v12c0 .96-.96 2.16-2.04 2.16h-22.08c-1.2 0-1.92-1.32-2.04-2.28v-2.16c0-3.12 0-6.24.12-9.36 0-.96.36-2.04 1.32-2.4l2.16-.72.12-.12-2.16-8.04s-8.52 0-12.24-.12h-2.16-1.32l-.48 2.4v.12l.48-.48h2.04l-2.76 2.04c-.12.12-.12.12-.12.24l-.36 1.8v.24l5.64-4.2h1.92l-7.8 5.88 1.56.72 8.76-6.6h1.8l-8.88 6.72h-1.08c.72.36 1.32 1.2 1.32 2.16v11.88c0 .96-.84 2.28-1.92 2.28h-22.08c-1.08 0-1.92-1.32-1.92-2.28v-11.88c-.72 0-1.44.72-1.68 1.32-.12.12-.12.36-.24.48l-2.28 1.68.48-1.8s.12 0 .12-.12l7.92-5.88zm11.4-54-4.32 3.24c0-.12.36-1.56.48-1.8l1.92-1.44zm-5.04 5.64 7.68-5.64h.36l-.36 1.44-8.16 6zm-.96 4.2 7.92-6-.48 1.8-8.04 6v-.12s.36-1.08.6-1.68zm6.36 0-8.04 6 .48-1.68v-.12l7.92-5.88.12-.12zm19.8 21-3.96-18.96-1.2 5.52v.24c0 .24.24.84.24 1.08-.24.12-.72.24-.72.6l-.48 2.16 1.56-1.2.24 1.2c0 .12 0 .12-.12.12l-2.16 1.68-.48 2.28 3.12-2.4.24 1.32-3.72 2.76c-.12 0-.12.12-.12.12l-.48 2.16 4.68-3.36c0 .24.24.96.24 1.2l-.12.12-4.68 3.48h.36 2.16l2.64-1.92.24 1.2c-.12.12-.72.6-.84.6h.6zm-21-16.8-7.92 6v-.12s.36-1.68.48-1.68l7.8-5.88.12-.12c0 .24-.36 1.44-.48 1.8zm-1.08 4.2-8.04 6s.36-1.2.48-1.8l8.04-6c0 .12-.36 1.68-.48 1.8zm-9.12 10.2.48-1.8 8.04-6.12-.48 1.8v.12l-7.92 5.88zm-1.08 3.96.36-1.56 8.04-6-.36 1.56zm-.6 2.4 8.04-6-.48 1.8-8.04 6 .36-1.68c0-.12.12-.12.12-.12zm-1.08 4.2 7.92-6s-.24 1.2-.48 1.8l-8.04 6c0-.12.48-1.68.6-1.8zm6.84-1.8v.12s-.36 1.08-.48 1.68l-8.04 6c0-.24.36-1.44.48-1.8zm-9.12 10.2 8.04-6-.48 1.8-8.16 6zm6.84-1.8v.12s-.24 1.08-.48 1.68l-8.04 6 .48-1.8zm21.6 10.56 8.88-6.72h.6l.12.84v.12l-8.28 6.24c0-.12-.12-.36-.12-.48zm-30.72-.36 8.04-6-.48 1.8-8.04 6v-.12zm32.52 2.28 8.16-6c.24.24.48.96.48.96v.12l-8.4 6.24c-.12-.24-.24-.96-.24-1.32zm.84 2.76 8.16-6.12.36 1.08c0 .12 0 .12-.12.24l-8.28 6.12-.24-1.08c0-.12 0-.12.12-.24zm.6 3c0-.12.12-.12.12-.12l4.68-3.48c0 .48-.12.96-.12 1.44l-8.16 6.12v-.24c0-.36 0-1.2.36-1.44.24-.24 1.32-1.08 1.8-1.32l1.44-.6zm-33.36-1.8v1.44l-8.28 6.24v-1.56zm29.76 7.68h.12l8.16-6.12v1.44l-8.28 6.24zm-36.24-4.68-1.44.96c.24-.36.84-.96 1.44-.96zm-1.8 6.48 8.28-6.12v1.44l-8.28 6.24zm38.04 1.56h.12l8.16-6.12v.6.84l-8.28 6.24v-.6-.48zm-38.04 3.24v-1.44l8.04-6c.12 0 .12-.12.24-.12v1.44zm38.04.24v-.12l8.28-6.12v1.32c0 .12-.12.24-.24.24l-8.04 6.12v-.24zm-38.04 1.68 8.28-6.12c0 .36.24.84.24 1.2l-8.4 6.24c-.12-.24-.12-.72-.12-.96zm38.28 1.44 8.28-6.24h.12c.24.36.48.48.84.84l-8.64 6.36c-.12 0-.6-.72-.6-.96zm-37.2 1.2 8.52-6.48c.6 0 1.2.12 1.68.12l-8.88 6.72h-.24c-.48 0-.84-.12-1.08-.36zm3.84.36 8.88-6.72h2.04l-9 6.72zm4.44 0 9-6.72h1.92l-9 6.72zm6.48 0h-1.92l8.88-6.72h1.92zm24.84 0 9-6.72h1.92l-9 6.72zm6.48 0h-1.92l8.88-6.72h1.92zm4.44 0h-1.92l8.88-6.72h1.92zm2.52 0 8.88-6.72h1.2v.48l-8.28 6.24zm-33.84 0h-1.92l7.68-5.76v1.44zm40.08 0h-1.92l5.76-4.32v1.44zm-36.24 0h-1.32l3.24-2.4c0 .96-.84 2.4-1.92 2.4z" />
        <path d="m322.96 21.72c2.64-19.56 12.72-21.72 30.36-21.72.48 0 2.16.00000084 2.4.120001l5.88.359999c11.28.72 15.12 13.32 15.12 22.92v5.16c0 1.08-.96 2.4-2.04 2.4h-11.88c-1.32 0-2.04-1.56-2.04-2.64v-5.64c0-3.84-1.68-4.8-5.4-4.92-.6 0-3.6-.12-4.2-.12h-.84-3.36c-2.52.12-6.12.36-7.32 3.12.12-.12.48-.24.6-.24-.96.84-1.32 1.44-1.32 2.88l4.8-3.6c.72-.12 1.32-.12 2.04-.12l-7.08 5.28c-.24.96-.24 4.32-.24 5.28v19.8c0 2.16.12 4.32.24 6.36.6 5.28 2.16 6.6 7.44 7.08 1.32 0 2.64.12 4.08.12h.96c.24 0 .24 0 .36-.12l7.92-5.88v.36.48.6l-6 4.44c.84 0 1.8 0 2.64-.12l3.12-2.28c0 .48-.24 1.08-.48 1.56 1.92 0 2.64-4.92 2.64-6.24v-5.64c0-1.08.96-2.4 2.16-2.4h11.76c1.08 0 2.16 1.2 2.16 2.28v7.44c0 12-4.08 21.48-17.64 22.56l-9.48.72c-10.2 0-19.92-.24-24.84-10.8-1.2-2.76-2.04-5.88-2.4-8.76l-.48-4.68-.24-5.52v-21.84c0-2.64.24-5.4.6-8.04zm.96-8.76-7.68 5.76c0-.12 1.68-2.52 2.04-2.88l6.36-4.8c.12-.12.36-.12.48-.12l-.24.36c-.12.24-.84 1.44-.96 1.68zm-1.8 4.68-7.8 5.88c0-.24.48-1.56.6-1.92l7.92-5.76zm19.32 8.64h-1.92l8.88-6.6h.48.48.84zm2.4 0 8.88-6.6c.48 0 1.2.12 1.68.12l-8.64 6.48-.12.12c-.24 0-1.56 0-1.8-.12zm-30.24-.36 8.04-6-.36 1.68-8.04 6c0-.12 0-.24.12-.36 0-.36.24-1.32.24-1.32zm34.2.84v-.12l8.52-6.36c.48 0 .96.24 1.2.6l-8.52 6.24c-.36-.12-.84-.24-1.2-.36zm2.28 1.56 8.28-6.24c.12-.12.36 1.08.36 1.2l-8.28 6.12c0-.36-.24-.72-.36-1.08zm-37.32 3 .12-1.56 8.04-6-.12 1.56zm37.92-.12 8.16-6.12v1.44l-8.16 6zm-38.04 2.16 7.8-6h.12v.24 1.2l-8.16 6.12c0-.24.12-1.32.24-1.56zm38.04 1.08 8.16-6.12v1.44l-8.16 6.12zm-38.28 2.28 8.04-6v.48 1.08l-8.16 6c0-.36 0-1.08.12-1.56zm38.4.96 8.16-6.12c.24.36.48.6.72.84l-8.4 6.36c-.12-.12-.6-.96-.48-1.08zm1.92 1.92 8.76-6.6h1.92l-8.76 6.6zm4.32 0 8.88-6.6h.72v.84l-7.68 5.76zm-44.76 1.92v-1.32l8.16-6.12v1.32zm49.2-1.92 5.16-3.84v1.44l-3.24 2.4zm-49.2 5.16v-1.44l8.16-6v1.44zm0 1.92 8.16-6.12v1.44l-8.16 6.12zm0 3.24 8.16-6v1.44l-8.16 6zm0 4.8v-1.44l7.92-6c.12 0 .12-.12.24-.12v1.44zm0 3.24v-1.44l7.92-5.88c.12 0 .12-.12.24-.12v1.44zm0 1.92 8.16-6.12v.12 1.32l-8.16 6.12v-1.08zm.12 3.24 8.16-6.12v1.2.24l-8.16 6zm38.88-1.44v-1.32l4.32-3.24h1.92zm1.8-4.56-1.32.96c.36-.48.84-.84 1.32-.96zm-40.44 9.12 8.04-6c.12.36.24.84.24 1.2l-8.16 6.12c-.12-.24-.12-.96-.12-1.32zm.36 3 8.04-6c.12.36.24.72.24 1.2 0 .12 0 .12-.12.12l-8.04 6c-.12-.24-.12-.96-.12-1.32zm.48 3 8.04-6v-.12c.12.36.24 1.08.24 1.32l-8.16 6.12c-.12-.36-.24-1.08-.24-1.2zm.48 2.88h.12l8.16-6.12.36 1.08-8.28 6.24c-.12-.48-.36-1.2-.36-1.2zm.96 2.52 8.28-6.12c.12.36.48.84.36 1.08l-8.28 6.24-.36-.96zm1.08 2.52 8.28-6.24.6 1.08-8.4 6.12s-.24-.36-.36-.6c0-.12-.12-.36-.12-.36zm2.04 3.24-.72-.96 8.4-6.24c.24.24.72.84.72.84l-8.28 6.24zm.96 1.08 8.4-6.24v-.12c.24.12.72.72.96.84l-8.4 6.36h-.12zm2.04 1.8 8.52-6.36c.12 0 .96.48 1.08.6l-8.52 6.36c-.12 0-.96-.48-1.08-.6zm2.52 1.44 8.52-6.48h.12l1.2.6-8.64 6.36c-.36-.12-1.08-.36-1.2-.48zm29.28 1.2 9.12-6.84c.72-.12 1.44-.36 2.04-.6h.12c-.12.24-.24.48-.48.6l-8.28 6.24c-.12.12-2.16.6-2.4.6zm-26.28-.12 8.52-6.36c.12-.12 0-.12.24-.12l1.32.36-8.64 6.48c-.6-.12-1.32-.36-1.44-.36zm21.12.72 8.88-6.72c.24-.12 1.92-.24 2.16-.24h.12l-9 6.72zm-17.76 0h.12l8.64-6.48c.6 0 1.2 0 1.68.12l-8.64 6.48c-.12.12-.12.12-.24.12-.24 0-1.08-.12-1.56-.24zm14.76.24-1.92.12 8.88-6.72c.24-.12.84-.12 1.32-.12h.84l-8.88 6.6c0 .12-.12.12-.24.12zm-10.8.12 8.76-6.48v-.12c.6 0 1.32 0 1.92.12l-8.88 6.6h-.36-.48-.84zm4.32.12 8.76-6.6h.12 1.56.36l-8.88 6.6z" />
        <path d="m402.2 63.84v-46.56l-2.88-.84c-.96-.36-1.68-1.32-1.68-2.28v-11.88c0-.84.84-2.28 1.8-2.28h21.96c1.08 0 1.92 1.56 1.92 2.52v11.28c0 2.64-2.4 2.76-4.8 3.48v13.68h12.24v-.48l8.28-6.24v1.56l-6.96 5.16h2.52l4.44-3.36v1.56l-2.52 1.8h4.44v-13.68l-3.12-.96c-1.08-.24-1.56-1.44-1.56-2.52v-11.28c0-.96.72-2.52 1.92-2.52h21.84c.96 0 1.8 1.32 1.8 2.16v12c0 1.08-.72 1.92-1.68 2.28l-2.88.84v46.56l3 1.08c.84.24 1.56 1.08 1.56 2.04v12.12c0 .84-.96 2.16-1.92 2.16h-21.72c-1.2 0-1.92-1.44-1.92-2.52v-11.28-.6c-1.32.48-1.68 1.08-1.92 2.52l-3.6 2.64v-1.44l5.64-4.2c.24-.24.36-.6.6-.84.36-.48 1.44-.84 2.04-.96l1.92-.72v-15h-22.44v2.04h.24l-.24.24v1.92l2.76-2.16h1.92l-4.68 3.48v1.92l7.2-5.4h1.92l-8.88 6.72c-.12 0-.12.12-.24.12v6.24l3.24.96c.96.36 1.56 1.56 1.56 2.52v11.16c0 1.2-.84 2.64-2.04 2.64h-21.72c-1.08 0-1.92-1.32-1.92-2.28v-11.88-.24c-.6.36-1.2.48-1.56 1.08l-3.96 3v-1.44l8.16-6.12v1.2zm-12-55.08-2.76 2.04c0-1.44 1.56-2.04 2.76-2.04zm-2.76 3.96 5.4-3.96h1.92l-7.32 5.52zm40.92-3.96h2.04l-4.32 3.12v-.36c0-.24 0-.96.24-1.2zm-2.28 5.04 6.84-5.04h1.44v.36l-8.28 6.12zm-38.64 3.72v-1.44l8.16-6.12v1.44zm38.64-.36 8.28-6.12v1.44l-8.28 6.12zm-38.64 2.28 8.16-6.12v1.44l-8.16 6.12zm38.64 2.52v-1.44l8.28-6.12v1.44zm-38.64.96c0-.12 0-.12.12-.24l8.16-6c.12.12.36.72.48.96l-8.4 6.36c-.12.12-.36-.96-.36-1.08zm38.88.84.12-.12 8.28-6.24c.24.36.6.6.84.84l-8.64 6.48c-.12 0-.6-.84-.6-.96zm-37.44 1.32 8.76-6.48 1.32.36-8.76 6.6zm40.92.72-1.32-.36 8.76-6.48c.36 0 1.2.24 1.44.36l-8.64 6.36c-.12.12 0 .12-.24.12zm-37.68.24 8.16-6.12v1.44l-8.16 6.12zm38.64 2.52v-1.44l8.28-6.12v1.44zm-38.64 2.28v-1.44l8.16-6.12v1.44zm0 3.24v-1.32l8.16-6.12v1.32zm0 1.92 8.16-6.24v1.56l-8.16 6.12zm0 3.36 8.16-6.24v1.56l-8.16 6.12zm0 4.8v-1.44l8.16-6.24v1.44zm0 1.92 8.16-6.24v1.44l-8.16 6.24zm0 3.24 8.16-6.12v1.44l-8.16 6.24zm0 4.92v-1.56l8.16-6.12v1.44zm0 3.24v-1.44l8.16-6.12v1.44zm29.16.12 8.88-6.72h1.92l-9 6.72zm6.36 0h-2.04l9-6.72h1.92zm2.52.12 8.88-6.72v1.44l-8.28 6.24v-.96zm-38.04 1.68 8.16-6.12v1.44l-8.16 6.12zm38.64 1.2 8.28-6.24v1.44l-8.28 6.24zm-38.64 3.6v-1.44l8.16-6.12v1.44zm38.64 1.08v-1.44l8.04-6c.12 0 .12-.12.24-.12v1.44l-8.16 6.12zm-38.64 2.28v-1.44l8.16-6.12v1.44zm38.64 1.2v-1.56l8.28-6.12v1.44zm-43.32 7.56 8.16-6.12v1.32l-8.16 6.12zm46.92-5.04v1.44l-8.28 6.12v-1.44zm-5.28 1.92h.12l-2.88 2.16c.12-1.08 1.56-2.16 2.76-2.16zm-41.64 7.8v-1.44l8.16-6.12v1.44zm38.64-.24 8.28-6.12v1.44l-8.28 6.12zm-38.64 2.16 8.16-6.12v1.44l-8.16 6.12zm38.64 2.64v-1.44l8.28-6.12v1.44zm-38.64 2.16v-1.44l8.04-6.12c.12.36.24.96.24 1.32zm38.64-.24 8.28-6.24.36 1.08-8.28 6.24c-.24-.24-.36-.72-.36-1.08zm-38.04 1.68 8.4-6.24c.6.24 1.08.12 1.44.36l-8.88 6.6c-.12 0-.96-.48-.96-.72zm39.24.6 8.76-6.48h1.92l-9 6.72h-1.08c-.12 0-.48-.12-.6-.24zm-35.88.24 9-6.72h1.92l-8.88 6.72zm4.56 0 8.88-6.72h1.92l-8.88 6.72zm4.44 0 8.88-6.72h2.04l-9 6.72zm31.2 0 8.88-6.72h1.92l-8.88 6.72zm4.44 0 8.88-6.72h1.92l-8.88 6.72zm4.44 0 8.88-6.72h2.04l-9 6.72zm-27.48-6.12v1.44l-6.24 4.68h-1.92zm38.64 1.08v1.44l-4.68 3.6h-2.04zm-42.24 5.04 3.6-2.76v.24c0 .48 0 1.2-.48 1.56l-1.2.96zm40.08 0v-.12l1.92-1.44v.12c0 .72-1.2 1.44-1.92 1.44z" />
      </g>
    </svg>
  );
};