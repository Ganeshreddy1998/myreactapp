import styled from "@emotion/styled";
import {
  Grid,
  Card,
  Typography as Text,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Checkbox,
} from "@mui/material";
import React, { useState, FC } from "react";
import Icon from "../../../components/atoms/Icon/Icon";
import Tag from "../../../components/atoms/Tag/Tag";
import Typography from "../../../components/atoms/Typography/Typography";
import FullPageLayout from "../../../components/organisms/FullPageLayout/FullPageLayout";
import HeadingLinkLayout from "../../../components/organisms/HeadingLinklayout/HeadingLinkLayout";
import Gutter from "../../../components/templates/Gutter";
import { colors } from "../../../constants";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const items = [
  { icon: "body", text: "Full Body Check", onClick: () => {} },
  { icon: "covid", text: "Covid RTPCR", onClick: () => {} },
  { icon: "liver", text: "Liver Function Test", onClick: () => {} },
  { icon: "bloodtest", text: "Complete Blood Count", onClick: () => {} },
  { icon: "diabetestest", text: "Diabetes Test", onClick: () => {} },
  { icon: "kidney", text: "Kidney Function Test", onClick: () => {} },
  { icon: "throid", text: "Thyroid Test", onClick: () => {} },
  { icon: "lipid", text: "Lipid Profile", onClick: () => {} },
];
const CommonlyBookedTest = () => {
  const [steps, setSteps] = useState([{ step: 1, label: "" }, { step: 2 }]);
  const [currentStep, setCurrentStep] = useState(1);
  const [currentLabel, setCurrentLabel] = useState("");
  const [showPage, setShowPage] = useState(false);
  return (
    <div>
      <FullPageModal
        open={showPage}
        handleClose={() => {
          setShowPage(false);
          setCurrentStep(1);
        }}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        currentLabel={currentLabel}
      />
      <HeadingLinkLayout
        heading="Commonly Booked Test"
        linkUrl="/"
      ></HeadingLinkLayout>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        {items.map((item, i) => (
          <Grid item xs={3} key={i}>
            <TestCard
              onClick={() => {
                setCurrentLabel(item.text);
                setSteps((prevSteps) => {
                  return prevSteps.map((step) => {
                    if (step.step === 1) {
                      return { ...step, label: item.text };
                    } else return step;
                  });
                });
                if (item.text === "Covid RTPCR") {
                  setShowPage(true);
                }
              }}
            >
              <IconCard>
                <Icon name={item.icon} />
              </IconCard>
              <Typography type="sm">{item.text}</Typography>
            </TestCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CommonlyBookedTest;

const TestCard = styled.div`
  padding: 16px 0;
  /* padding: 16px 88px; */
  width: 283px;
  height: 116px;
  box-shadow: 0px 0px 20px rgba(125, 125, 125, 0.08);
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;
const IconCard = styled.div`
  width: 50px;
  height: 50px;
  background: #f2f5ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

interface FullPageModalprops {
  open: boolean;
  handleClose: Function;
  currentStep: number;
  setCurrentStep: Function;
  currentLabel: string;
}

const FullPageModal: FC<FullPageModalprops> = ({
  open,
  handleClose,
  currentStep,
  setCurrentStep,
  currentLabel,
}) => {
  const headItems = [
    { icon: "home", label: "Home visit" },
    { icon: "test", label: "1 test included" },
    { icon: "doctor", label: "Free consultation" },
    { icon: "reports", label: "Online reports" },
  ];
  const testInfoList = [
    "This package covers nasal/oral swab test & same day pickup. It indicates if you currently have the COVID-19 infection.",
    "Disclaimer 1:For travelling purposes, please ensure the name is as per govt ID proof.",
    "Disclaimer 2: Vaccination status will be required and Covid Positive Reports will be made available as per local ",
    "Municipal corporation guidelines.",
  ];
  const whyThis = [
    "To check if you have an active COVID-19 infection",
    "If you are showing symptoms of COVID-19 infection",
    "If you had a contact with someone with confirmed COVID-19",
  ];
  const bookingForList = [
    "Myself",
    "Mother",
    "Father",
    "Son",
    "Daughter",
    "Others",
  ];
  const [bookingFor, setBookingFor] = useState("Myself");
  const [value, setValue] = useState(null);
  const [gender, setGender] = useState("");

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender((event.target as HTMLInputElement).value);
  };

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FullPageLayout
      open={open}
      handleClose={handleClose}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ my: 4 }}
      >
        <Grid item md={5}>
          <Card sx={{ p: "24px 18px" }}>
            {currentStep === 1 ? (
              <>
                <Text variant="subtitle1">{currentLabel}</Text>
                <Grid container sx={{ my: 2 }}>
                  {headItems.map((item, i) => (
                    <Grid item xs={6} md={3} key={i}>
                      <Grid container alignItems="center">
                        <IconWrap
                          container
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Icon name={item.icon} />
                        </IconWrap>
                        <Typography type="xs">{item.label}</Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
                <TestInfo container alignItems="center">
                  <Grid item alignItems="center" sx={{ display: "flex" }}>
                    <Icon name="dollar" />
                    <Typography type="xs" style={{ marginLeft: "7px" }}>
                      Starting from $1200
                    </Typography>
                  </Grid>
                  <Grid item alignItems="center" sx={{ display: "flex" }}>
                    .
                  </Grid>
                  <Grid item alignItems="center" sx={{ display: "flex" }}>
                    <Icon name="clock" />
                    <Typography type="xs" style={{ marginLeft: "7px" }}>
                      Reports ready in 24 Hours
                    </Typography>
                  </Grid>
                </TestInfo>
                <TestInfoList>
                  <ul>
                    {testInfoList.map((item, i) => (
                      <li key={i}>
                        <Typography type="xs">{item}</Typography>
                      </li>
                    ))}
                  </ul>
                </TestInfoList>
                <WhyThisContainer container spacing={2}>
                  <Grid item xs={12}>
                    <Typography type="sm">
                      {" "}
                      Why you should book this package?
                    </Typography>
                  </Grid>
                  {whyThis.map((item, i) => (
                    <Grid item xs={4} key={i}>
                      <WhyThisCard>
                        <Typography type="xs">{item}</Typography>
                      </WhyThisCard>
                    </Grid>
                  ))}
                </WhyThisContainer>
              </>
            ) : (
              <>
                <Text variant="subtitle1">Add Patient Details</Text>
                <Grid sx={{ my: 2 }}>
                  <Typography type="xs" style={{ marginBottom: "13px" }}>
                    Booking for whom
                  </Typography>
                  {bookingForList.map((item, i) => (
                    <Tag
                      key={i}
                      onClick={() => {
                        setBookingFor(item);
                      }}
                      active={bookingFor === item}
                    >
                      <Typography type="sm">{item}</Typography>
                    </Tag>
                  ))}
                </Grid>
                <form>
                  <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    fullWidth
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date of Birth"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      // variant="standard"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          fullWidth
                          label="Date of Birth"
                        />
                      )}
                    />
                  </LocalizationProvider>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={gender}
                    onChange={handleGenderChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                    label="Save details for future"
                  />
                </form>
              </>
            )}
          </Card>
        </Grid>
      </Grid>
    </FullPageLayout>
  );
};

const IconWrap = styled(Grid)`
  width: 44px;
  height: 44px;
  background-color: ${colors.purple_50};
  img {
    width: 20px;
    height: 20px;
  }
  border-radius: 8px;
  margin-right: 6px;
`;

const TestInfo = styled(Grid)`
  border: 1px solid #e9e8ed;
  border-radius: 12px;
  padding: 2px 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin: 20px 0;
  width: fit-content;
`;
const TestInfoList = styled.div`
  padding: 0 20px;

  ul {
    list-style: disc;
    li {
      margin-bottom: 8px;
    }
  }
`;
const WhyThisContainer = styled(Grid)`
  margin: 20px 0;
`;

const WhyThisCard = styled.div`
  padding: 12px;
  border-radius: 12px;
  background-color: ${colors.purple_50};
`;
