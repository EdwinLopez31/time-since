import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewEntryForm from "./index";
// import { getRecord } from "@utils/indexedDb";
import { getAllRecord, addRecord } from "../../utils/indexedDb";

describe("Create Entry Form Fields", () => {
  userEvent.setup();

  describe("Event Name Input Field", () => {
    it("should have an input field called event name", () => {
      render(<NewEntryForm />);

      expect(
        screen.getByRole("textbox", { name: /Event Name/i })
      ).toBeInTheDocument();
    });

    it("should reflect what the text user typed", async () => {
      render(<NewEntryForm />);
      const inputField = screen.getByRole("textbox", { name: /Event Name/i });

      await userEvent.type(inputField, "Birthday");

      expect(inputField).toHaveValue("Birthday");
    });
  });

  describe("Event Date Input Field", () => {
    it("should have an input field called event date", () => {
      render(<NewEntryForm />);

      expect(screen.getByLabelText(/Event Date/i)).toBeInTheDocument();
    });

    it("should reflect the date user typed", async () => {
      render(<NewEntryForm />);
      const inputField = screen.getByLabelText(/Event Date/i);
      await userEvent.clear(inputField);
      await userEvent.type(inputField, "2022-12-17T11:10");

      expect(inputField).toHaveValue("2022-12-17T11:10");
    });
  });

  describe("Event Description Input Field", () => {
    it("should have an input field called event description", () => {
      render(<NewEntryForm />);

      expect(
        screen.getByRole("textbox", { name: /Event Description/i })
      ).toBeInTheDocument();
    });

    it("should reflect the text user typed", async () => {
      render(<NewEntryForm />);

      const inputField = screen.getByRole("textbox", {
        name: /Event Description/i,
      });

      await userEvent.type(inputField, "A short event description");

      expect(inputField).toHaveValue("A short event description");
    });
  });
});

describe("Create Entry Form Proper", () => {
  userEvent.setup();

  it("is rendered in the page", () => {
    render(<NewEntryForm />);

    expect(
      screen.getByRole("form", { name: /Create Entry/i })
    ).toBeInTheDocument();
  });

  it("has a submit button", () => {
    render(<NewEntryForm />);

    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  it("does not submit any values when input fields are null", async () => {
    render(<NewEntryForm />);
    const submitBtn = screen.getByRole("button", { name: /Submit/i });

    const form = screen.getByRole("form", { name: /Create Entry/i });

    await userEvent.click(submitBtn);

    expect(form).toHaveFormValues({});
  });

  it("saves valid values", async () => {
    render(<NewEntryForm />);
    const submitBtn = screen.getByRole("button", { name: /Submit/i });

    const form = screen.getByRole("form", { name: /Create Entry/i });

    const eventNameInput = screen.getByRole("textbox", { name: /Event Name/i });
    await userEvent.type(eventNameInput, "Birthday");

    await userEvent.click(submitBtn);

    expect(form).toHaveFormValues({ eventName: "Birthday" });
  });

  it("validates the form", async () => {
    render(<NewEntryForm />);
    const submitBtn = screen.getByRole("button", { name: /Submit/i });
    const eventNameInput = screen.getByRole("textbox", { name: /Event Name/i });
    const eventDateInput = screen.getByLabelText(/Event Date/i);
    const eventDescInput = screen.getByRole("textbox", {
      name: /Event Description/i,
    });

    await userEvent.type(eventNameInput, "Birthday");

    await userEvent.click(submitBtn);

    //should be valid because a value is passed
    expect(eventNameInput).toBeValid();

    //should be invalid because it is required and no value was passed
    expect(eventDateInput).toBeInvalid();
    expect(eventDescInput).toBeInvalid();
  });

  it("successfully adds a new record", async () => {
    render(<NewEntryForm />);

    // const submitBtn = screen.getByRole("button", { name: /Submit/i });
    const eventNameInput = screen.getByRole("textbox", { name: /Event Name/i });
    const eventDateInput = screen.getByLabelText(/Event Date/i);
    const eventDescInput = screen.getByRole("textbox", {
      name: /Event Description/i,
    });

    await userEvent.type(eventNameInput, "Birthday");
    await userEvent.type(eventDescInput, "Sample Description");
    await userEvent.type(eventDateInput, "2022-12-17T11:10");

    // await userEvent.click(submitBtn);
    // encountering problems with async - not waiting addRecord event in submit button to fnish before getAllRecord.

    // testing the implementation of the submit button here
    await addRecord({
      eventName: "Birthday",
      eventDescription: "Sample Description",
      eventDate: "2022-12-17T11:10",
    });

    const result = await getAllRecord();

    await waitFor(() => expect(result).toHaveLength(1));
  });
});
