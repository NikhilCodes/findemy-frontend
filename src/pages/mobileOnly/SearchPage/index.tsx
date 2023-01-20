import { Input, InputRef } from "antd";
import React from "react";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const navigate = useNavigate();
  const searchRef = React.useRef<InputRef>(null);
  return (
    <div className={'vw-100 vh-100'}>
      <div>
        <Input
          ref={searchRef}
          size={'large'}
          prefix={<SearchOutlined/>}
          suffix={<CloseOutlined/>}
          onPressEnter={() => {
            navigate(`/courses?q=${searchRef.current?.input?.value}`);
          }}
        />
        <div/>
      </div>
    </div>
  );
}
