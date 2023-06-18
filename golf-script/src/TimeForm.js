import { Flex, Box, Heading, FormControl, Input, Button, FormLabel, Center, Text } from "@chakra-ui/react";
import axios from 'axios';
import { useState } from "react";

export default function TimeForm() {
  const handleSubmit = async (event) => {
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
    if (curHour >= 0 && curHour <= 6) {
      targetDate.setDate(targetDate.getDate() + 6)
    }
    else {
      targetDate.setDate(targetDate.getDate() + 7)
    }
    if (time1 === '' && time2 === '' && time3 === '' && time4 === ''){
      setSubmitMessage(`No times selected: Any previously submitted registration times have been canceled.`)
    }
    else{
      setSubmitMessage(`The earliest desired time out of your times chosen (${time1 === '' ? '' : time1 + ','} ${time2 === '' ? '' : time2 + ','} ${time4 === '' ? '' : time4 + ''}) will be registered @ 7:00 AM for \n ${targetDate.toDateString()}`)
    }
  }
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [time3, setTime3] = useState('');
  const [time4, setTime4] = useState('');
  const [submitMessage, setSubmitMessage] = useState('')
  return (
    <div className="container">
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Governor's Club Tee Time Registration Script</Heading>
          </Box>
          <Box class='b' my={1} textAlign="center">
              <div className='t'>Enter up to 4 desired times (<b>earliest will be chosen first</b>) in the exact format as they show on the site: e.g. ("8:00 AM", "12:24 PM")</div>
          </Box>
          <Box class='b' my={1} textAlign="center">
              <div className='t'>(Hitting the button multiple times <b>restarts</b> the script with new times)</div>
          </Box>
          <Box class='b' my={1} textAlign="center">
              <div className='t'>(Hitting the button with no times will <b>cancel</b> any previously submitted registration requests)</div>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
              <FormControl mt={6}>
                <FormLabel>Time 1</FormLabel>
                <Input type="time1" placeholder="" onChange={event => setTime1(event.currentTarget.value)} />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Time 2</FormLabel>
                <Input type="time2" placeholder="" onChange={event => setTime2(event.currentTarget.value)} />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Time 3</FormLabel>
                <Input type="time3" placeholder="" onChange={event => setTime3(event.currentTarget.value)} />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Time 4</FormLabel>
                <Input type="time4" placeholder="" onChange={event => setTime4(event.currentTarget.value)} />
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