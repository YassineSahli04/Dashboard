import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Header from "../../components/Header";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { t } = useTranslation();

  return (
      <Box display="flex" justifyContent="space-between" alignItems="center"          // ✅ Align vertically centered
  p={1}  >
        {/* SEARCH BAR */}
        <Box
          display="flex"
        >
          <Header title={t("dashboard")} subtitle={t('welcome')}/>
        </Box>

        {/* ICONS */}
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>

          <LanguageSwitcher />
        </Box>
      </Box>
  );
};

export default Topbar;
