import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
     children?: React.ReactNode;
     index: number;
     value: number;
}

function TabPanel(props: TabPanelProps) {
     const { children, value, index, ...other } = props;

     return (
          <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
               {value === index && (
                    <Box sx={{ p: 3 }}>
                         <Typography>{children}</Typography>
                    </Box>
               )}
          </div>
     );
}

function a11yProps(index: number) {
     return {
          id: `simple-tab-${index}`,
          "aria-controls": `simple-tabpanel-${index}`,
     };
}

const Filter = (props) => {
     const handleChange = (event, newValue) => {
          props.setSelectedFilterIndex(newValue);
     };

     return (
          <Box sx={{ width: "100%" }}>
               <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                         TabIndicatorProps={{ style: { background: "var(--color-primary)" } }}
                         value={props.selectedFilterIndex}
                         onChange={handleChange}
                         aria-label="basic tabs example"
                    >
                         {props.data.map((ele) => (
                              <Tab label={ele.label} style={{ color: "white" }} {...a11yProps(0)} key={ele.key} />
                         ))}
                    </Tabs>
               </Box>
               {/* <TabPanel value={value} index={0}>
                    Item One
               </TabPanel>
               <TabPanel value={value} index={1}>
                    Item Two
               </TabPanel>
               <TabPanel value={value} index={2}>
                    Item Three
               </TabPanel> */}
          </Box>
     );
};

export default Filter;
