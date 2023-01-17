import React, { ReactNode } from "react";
import { Backdrop, Box, Grid, Modal, Fade, Typography } from "@mui/material";
import Gutter from "../../templates/Gutter";
import Icon from "../../atoms/Icon/Icon";
import { colors } from "../../../constants";
import styled from "@emotion/styled";
import Button from "../../atoms/Button/Button";

const style = {
  position: "absolute" as "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "white",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  //   p: 4,
  overflowY: "scroll",
};

interface props {
  children: ReactNode;
  open: boolean;
  handleClose: any;
  currentStep: number;
  setCurrentStep: Function;
}

const FullPageLayout: React.FC<props> = ({
  children,
  open,
  handleClose,
  currentStep,
  setCurrentStep,
}) => {
  console.log({ currentStep });
  //   const [open, setOpen] = React.useState(true);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Gutter style={{ marginBottom: "70px" }}>
              <Grid sx={{ width: "100%" }}>
                <Grid sx={{ py: "24px" }}>
                  <img src="/images/logo_name.png" alt="logo" />
                </Grid>
                <Grid sx={{ cursor: "pointer" }}>
                  <Grid
                    item
                    container
                    alignItems="center"
                    onClick={() => {
                      if (currentStep === 1) {
                        handleClose();
                      } else {
                        setCurrentStep(currentStep - 1);
                      }
                    }}
                  >
                    <Icon name="back-arrow" />
                    <Typography
                      variant="subtitle2"
                      sx={{ ml: "7px", color: colors.blue_500 }}
                    >
                      Back
                    </Typography>
                  </Grid>
                </Grid>
                {children}
              </Grid>
            </Gutter>
            <StickyFooter>
              <Gutter style={{ height: "100%" }}>
                <Grid
                  container
                  //   sx={{ height: "100%" }}
                  style={{ height: "100%" }}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Button
                      variant="red_text"
                      onClick={() => {
                        handleClose();
                      }}
                    >
                      <Typography variant="subtitle2">Cancel</Typography>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="blue"
                      onClick={() => {
                        setCurrentStep(currentStep + 1);
                      }}
                    >
                      <Typography variant="subtitle2">
                        {currentStep === 1 ? "Add Patient " : "Next"}
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Gutter>
            </StickyFooter>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default FullPageLayout;

const StickyFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.06);
`;
