import { useRouter } from "next/router";
import { formData } from "../data/form";
import { Button, Checkbox, Form, Input } from "antd";
import Field from "../components/field";

export default function dynamicForm() {
  const router = useRouter();
  const data = formData.filter((item) => item.path === router.query.id)[0];
  const onFinish = (values) => {
    axios.post(data.createurl, values);
  };

  if (data) {
    return (
      <div>
        <h1>{data?.titleform}</h1>
        <Form
          onFinish={onFinish}
        >
          {data.field.map((item) => (
            <Field data={item} key={item.path} />
          ))}
        </Form>
      </div>
    );
  } else {
    return <>...loading</>;
  }
}
