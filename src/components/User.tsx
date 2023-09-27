import { User } from "@/types";
import { Stack, Typography } from "@mui/material";

const User: React.FC<User> = (user) => (
  <Stack>
    <Typography>{user.name}</Typography>
    <Typography color={"secondary"} variant="caption">
      {user.email}
    </Typography>
  </Stack>
);

export default User;
