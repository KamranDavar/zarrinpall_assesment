import { Radio, Form, Input } from "antd";

export default function Field(data) {
  console.log(data);

  data = data.data;
  if (data.type === "text") {
    return (
      <Form.Item label={data.title} name={data.name}>
        <Input />
      </Form.Item>
    );
  }
  if (data.type == "pass") {
    return (
      <Form.Item label={data.title} name={data.name}>
        <Input.Password />
      </Form.Item>
    );
  }
  if (data.type == "radio") {
    return (
      <Form.Item label={data.title} name={data.name}>
        <Radio.Group>
          <Radio value="a">item 1</Radio>
          <Radio value="b">item 2</Radio>
        </Radio.Group>
      </Form.Item>
    );
  }
}
