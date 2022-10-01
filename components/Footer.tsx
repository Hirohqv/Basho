import { Icon } from "@mui/material";
import { NAVIGATION, siteTitle } from "../consts";

export default function Footer() {
  return (
    <footer className="flex  h-24 w-full items-center justify-center mb-2 space-x-2 text-lg text-gray-700 mt-auto flex-col ">
      <div className="flex mb-5 space-x-4 text-skydark-400 ">
        {NAVIGATION.social.map(({ href, muiIcon }) => (
          <a href={href}>
            <Icon component={muiIcon} fontSize="large" />
          </a>
        ))}
      </div>
      <div className="mb-2 flex space-x-2 text-lg text-skydark-400">
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <div>{siteTitle}</div>
      </div>
    </footer>
  );
}
