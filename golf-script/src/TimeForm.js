import { Flex, Box, Heading, FormControl, Input, Button, FormLabel, Center } from "@chakra-ui/react";
import axios from 'axios';
import { useState } from "react";

export default function TimeForm() {
    const handleSubmit = async (event) => {  
      console.log(time1);
      console.log(time2);
      console.log(time3);
      console.log(time4);
      event.preventDefault();
      let body = {
        "time1": time1,
        "time2": time2,
        "time3": time3,
        "time4": time4
    }
      let data = await axios.post("https://groupeats.net/GolfScript", body);
      const curDate = new Date();
      var targetDate = new Date(curDate);
      const curHour = new Date().getHours();
      if (curHour >= 0 && curHour <= 6){
        targetDate.setDate(targetDate.getDate() + 6)
      }
      else{
        targetDate.setDate(targetDate.getDate() + 7)
      }
      setSubmitMessage(`The earliest desired time out of your times chosen (${time1 == '' ? '' : time1 + ','} ${time2 == '' ? '' : time2 + ','} ${time4 == '' ? '' : time4 + ''}) will be registered @ 7:00 AM on \n ${targetDate.toDateString()}`)
    }
    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');
    const [time3, setTime3] = useState('');
    const [time4, setTime4] = useState('');
    const [submitMessage, setSubmitMessage] = useState('')
    return (
      <div>
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Governor's Club Registration Script</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <Center>Enter up to 4 desired times (<b>Earliest will be chosen first</b>) in this format: "hh:mm AM/PM" e.g. ("8:00 AM")</Center>
            <Center>(Hitting the button multiple times restarts the script with new times)</Center>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Time 1</FormLabel>
                <Input type="time1" placeholder="" onChange={event => setTime1(event.currentTarget.value)}/>
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Time 2</FormLabel>
                <Input type="time2" placeholder="" onChange={event => setTime2(event.currentTarget.value)}/>
              </FormControl>
              <FormControl>
                <FormLabel>Time 3</FormLabel>
                <Input type="time3" placeholder="" onChange={event => setTime3(event.currentTarget.value)}/>
              </FormControl>
              <FormControl>
                <FormLabel>Time 4</FormLabel>
                <Input type="time4" placeholder="" onChange={event => setTime4(event.currentTarget.value)}/>
              </FormControl>
              <Button width="full" mt={4} type="submit">
                Start Script
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
      <b>{submitMessage}</b>
      </div>
    );
  }