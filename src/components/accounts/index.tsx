import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

import { accountStore } from "./accounts";

export default function Accounts() {
  const { accounts, total, updateInstitution } = accountStore();
  return (
    <>
      <Card className="flex flex-col items-center justify-center">
        <CardHeader>
          <CardTitle>Investment And Bank Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="institution">Institution</TableHead>
                <TableHead className="type">Type</TableHead>
                <TableHead className="balance">Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map(
                ({ institution, accountType, amount, amountValid }, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button>x</Button>
                        {institution}
                      </div>
                    </TableCell>
                    <TableCell>{accountType}</TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        size={10}
                        className={`text-right ${
                          amountValid ? "" : "bg-red-400"
                        }`}
                        value={amount}
                        onChange={(e) =>
                          updateInstitution(institution, e.target.value)
                        }
                      />
                    </TableCell>
                  </TableRow>
                )
              )}
              <TableRow>
                <TableHead>Total</TableHead>
                <TableHead />
                <TableHead className="text-right pr-5">{total}</TableHead>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex gap-1">
          <Button>Clear Balances</Button>
          <Button>Add New Institution</Button>
          <Button>Delete Institution</Button>
          <Button>Cancel Deletion</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex flex-row items-center justify-center gap-1">
            <Button>Add New Institution</Button>
            <Button>Cancel Add</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="institution">Institution</TableHead>
                <TableHead className="type">Type</TableHead>
                <TableHead className="balance">Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Input size={15} />
                </TableCell>
                <TableCell className="text-right">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="selectedItem" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={"item"}>{"item"}</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Input size={10} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p>{"warning"}</p>
        </CardFooter>
      </Card>
    </>
  );
}
