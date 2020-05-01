
import { apolloServerInstance } from "./server/apolloServer";

apolloServerInstance.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`env`+process.env.BD_CLIENT),
  console.log("🚀  Server is running on %o", url);
});

