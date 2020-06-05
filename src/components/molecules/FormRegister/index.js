import React from "react";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import FileInput from "../../atoms/FileInput";
import { PickerCountry, PickerState, PickerCity } from "../../atoms/Picker";
import { TemplateBox } from "../../atoms/TemplateBox";

export const Form1 = (props) => (
    <TemplateBox>
      <Title id="title" title="Register" />
      <Input authorization={true} />
      <Input authorization={true} placeholder="E-mail" type="email" />
      <Input authorization={true} placeholder="Password" type="password" />
      <Input
        authorization={true}
        placeholder="Confirm password"
        type="password"
      />
      <Button onClick={() => props.onClick()} title="Continue" type="btn" link="/Register"/>
    </TemplateBox>
);

export const FormUser2 = () => (
    <TemplateBox>
      <Title id="title" title="Register" />
      <PickerCountry />
      <PickerState />
      <PickerCity />
      <Button link="/Campaign" title="Continue" type="btn"/>
    </TemplateBox>
);

export const FormOng2 = (props) => (
    <TemplateBox>
      <Title id="title" title="Register" />
      <PickerCountry />
      <PickerState />
      <PickerCity />
      <Input authorization={true} placeholder="Zip Code" type="number" />
      <Input authorization={true} placeholder="Street" />
      <Input authorization={true} placeholder="Number" type="number" />
      <Input authorization={false} placeholder="Other information" />
      <Button onClick={() => props.onClick()} title="Continue" type="btn" link="/Register"/>
    </TemplateBox>
);

export const FormOng3 = (props) => (
    <TemplateBox>
      <Title id="title" title="Register" />
      <Input authorization={true} placeholder="Main phone" type="number" />
      <Input authorization={true} placeholder="Other contacts" type="number" />
      <Button onClick={() => props.onClick()} title="Continue" type="btn" link="/Register"/>
    </TemplateBox>
);

export const FormOng4 = () => (
    <TemplateBox>
      <Title id="title" title="Register" />
      <Input authorization={true} placeholder="ONG description" />
      <label id="txt-off">ONG image</label>
      <FileInput />
      <Button link="/Profile" title="Continue" type="btn" />
    </TemplateBox>
);
