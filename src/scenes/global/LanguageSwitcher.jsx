import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import i18n from "../../i18n";

const LanguageSwitcher = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang) => {
    if (lang) i18n.changeLanguage(lang);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <LanguageIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose(null)}>
        <MenuItem onClick={() => handleClose("en")}>🇬🇧 English</MenuItem>
        <MenuItem onClick={() => handleClose("fr")}>🇫🇷 Français</MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
