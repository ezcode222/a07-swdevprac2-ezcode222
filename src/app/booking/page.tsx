import DateReserve from "../../components/DateReserve";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function BookingPage() {
  return (
    <main className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Venue Booking</h1>

      <form className="flex flex-col gap-6 w-full max-w-md">
        <TextField
          variant="standard"
          name="Name-Lastname"
          label="Name-Lastname"
        />

        <TextField
          variant="standard"
          name="Contact-Number"
          label="Contact-Number"
        />

        <FormControl variant="standard" fullWidth>
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select
            labelId="venue-label"
            id="venue"
            defaultValue=""
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        <DateReserve />

        <Button variant="contained" name="Book Venue">
          Book Venue
        </Button>
      </form>
    </main>
  );
}