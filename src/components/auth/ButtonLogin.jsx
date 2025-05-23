import { Button, Divider, Flex } from "antd";
import { useActionStore } from "../../store/store";

export const ButtonLogin = ({ onLogin, adminAccount, employeeAccount }) => {
  const { loading, disabled } = useActionStore();

  const accountItem = [
    { onFill: adminAccount, label: "Admin Account" },
    { onFill: employeeAccount, label: "Employee Account" },
  ];

  return (
    <Flex vertical gap="middle" style={{ width: "100%" }}>
      <Button type="primary" loading={loading} onClick={onLogin}>
        Login
      </Button>
      <Divider plain>Login with</Divider>
      <Flex gap="middle">
        {accountItem.map((item, i) => (
          <Button block key={i} disabled={disabled} onClick={item.onFill}>
            {item.label}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};
