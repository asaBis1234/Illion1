import Head from 'next/head'
import Image from 'next/image'
import styles from "../../styles/Home.module.css"
import {useEffect,useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Col,Container,Form,Row,Button ,Dropdown} from 'react-bootstrap'


import { useSelector, useDispatch } from "react-redux";

import {createCustomer} from "../../state/services"
export default function Home({data}) {


  const customer=useSelector(state=>state.customer)

  console.log("propdata",data)
  const dispatch=useDispatch();


  const institute={};
  institute.institute=data.institutions;

  var instituteArry;
 
const [showCredential, setshowCredential] = useState(false);
instituteArry=institute.institute;
 
  const [slug, setSlug] = useState('');

  const [selectInst,setselectInst]=useState({
    noOfcred:0,
    field:[],
    slug:""
  })


  const [bankform, setbankform] = useState({})

  const handleChange = (event) => {
    setSlug(event.target.value);
    console.log(event.target.value)
   
  
   const selectInst= instituteArry.find(el=>el.slug==event.target.value);
   setselectInst({
       noOfcred:selectInst.credentials.length,
       field:selectInst.credentials,
       slug:selectInst.slug
       })

       setshowCredential(true);
       setbankform({})
  };
  

  const handleChangecommon=(e)=>{
   
    setbankform({...bankform,[e.target.name]:e.target.value})

  
  }

  const formsubmit=(e)=>{
    e.preventDefault();
    console.log(selectInst.slug)
    console.log(bankform);
    setbankform({})

    const submitdata= {
      credentials: {
      institution: selectInst.slug}
  };

  const bodydata = Object.assign(submitdata.credentials, bankform)

  dispatch(createCustomer(bodydata))

  console.log("customerdata",customer);

};



  
console.log("data",institute.institute)



  return (
   <div>
     <Container>

  <Row className={styles['divmargin']}>
    
   
  </Row>
  <Row>
  <Col></Col>
    <Col>
    <Row>

   
    {institute.loading?
    "loading":
    (
     
      <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">institute</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={slug}
          onChange={handleChange}
          autoWidth
          label="slug"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          
          
       {institute.institute.map(v=> <MenuItem value={v.slug}>{v.name}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
    )
    }

    </Row>
    <Row>
      {
         showCredential && 
      (
    <Form>
      {
        selectInst.field.map((v)=>{
        return (

        <Form.Group className="mb-3" controlId={v.fieldID}>
    <Form.Label>{v.name}</Form.Label>
    <Form.Control type={v.type} name={v.fieldID} placeholder={'enter'+v.name} onChange={handleChangecommon} value={bankform[v.fieldID]?bankform[v.fieldID]:""}/>
  
  </Form.Group>
        )
        })

        
      }


<Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={formsubmit}>
    Submit
  </Button>
  
</Form>
      )

      }
</Row>
    </Col>
    <Col></Col>
  </Row>
</Container>
   </div>
  )
    }


export const getServerSideProps = async (ctx) => {

  const headers = {
    'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
     
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Content-Type': 'application/json',
      'X-API-KEY':'19e857ab-fcbe-4d6a-903a-e151c37abda1'
    };

    const settings = {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-API-KEY':'19e857ab-fcbe-4d6a-903a-e151c37abda1'
      }
  };
  

  const res= await fetch('https://apitest.bankfeeds.com.au/v1/institutions',settings);
  //console.log(res)
  const data= await res.json();
 
    console.log(data)
  return {
    props:{
      data
    }
  }
}