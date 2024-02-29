import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { BoxIcon, CheckboxIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import "./styles.css";

const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [bookmarksChecked2, setBookmarksChecked2] = React.useState(true);
  const [bookmarksChecked3, setBookmarksChecked3] = React.useState(true);
  const [bookmarksChecked4, setBookmarksChecked4] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <>
      <div className="container">
        <h1>Transfer Information</h1>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="DropdownButton" aria-label="Customise options">
              Transfer To
              <ChevronDownIcon />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="DropdownMenuContent"
              sideOffset={5}
            >
              <DropdownMenu.CheckboxItem
                className="DropdownMenuCheckboxItem"
                checked={bookmarksChecked}
                onCheckedChange={setBookmarksChecked}
              >
                {!bookmarksChecked && (
                  <div className="DropdownMenuItemIndicator">
                    <BoxIcon />
                  </div>
                )}
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <CheckboxIcon />
                </DropdownMenu.ItemIndicator>
                Menu Item
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem
                className="DropdownMenuCheckboxItem"
                checked={bookmarksChecked2}
                onCheckedChange={setBookmarksChecked2}
              >
                {!bookmarksChecked2 && (
                  <div className="DropdownMenuItemIndicator">
                    <BoxIcon />
                  </div>
                )}
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <CheckboxIcon />
                </DropdownMenu.ItemIndicator>
                Menu Item
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem
                className="DropdownMenuCheckboxItem"
                checked={bookmarksChecked3}
                onCheckedChange={setBookmarksChecked3}
              >
                {!bookmarksChecked3 && (
                  <div className="DropdownMenuItemIndicator">
                    <BoxIcon />
                  </div>
                )}
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <CheckboxIcon />
                </DropdownMenu.ItemIndicator>
                Menu Item
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem
                className="DropdownMenuCheckboxItem"
                checked={bookmarksChecked4}
                onCheckedChange={setBookmarksChecked4}
              >
                {!bookmarksChecked4 && (
                  <div className="DropdownMenuItemIndicator">
                    <BoxIcon />
                  </div>
                )}
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <CheckboxIcon />
                </DropdownMenu.ItemIndicator>
                Menu Item
              </DropdownMenu.CheckboxItem>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="DropdownButton" aria-label="Customise options">
              Transfer From
              <ChevronDownIcon />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="DropdownMenuContent"
              sideOffset={5}
            >
              <DropdownMenu.CheckboxItem
                className="DropdownMenuCheckboxItem"
                checked={bookmarksChecked}
                onCheckedChange={setBookmarksChecked}
              >
                {!bookmarksChecked && (
                  <div className="DropdownMenuItemIndicator">
                    <BoxIcon />
                  </div>
                )}
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <CheckboxIcon />
                </DropdownMenu.ItemIndicator>
                Menu Item
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem
                className="DropdownMenuCheckboxItem"
                checked={bookmarksChecked2}
                onCheckedChange={setBookmarksChecked2}
              >
                {!bookmarksChecked2 && (
                  <div className="DropdownMenuItemIndicator">
                    <BoxIcon />
                  </div>
                )}
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <CheckboxIcon />
                </DropdownMenu.ItemIndicator>
                Menu Item
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem
                className="DropdownMenuCheckboxItem"
                checked={bookmarksChecked3}
                onCheckedChange={setBookmarksChecked3}
              >
                {!bookmarksChecked3 && (
                  <div className="DropdownMenuItemIndicator">
                    <BoxIcon />
                  </div>
                )}
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <CheckboxIcon />
                </DropdownMenu.ItemIndicator>
                Menu Item
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem
                className="DropdownMenuCheckboxItem"
                checked={bookmarksChecked4}
                onCheckedChange={setBookmarksChecked4}
              >
                {!bookmarksChecked4 && (
                  <div className="DropdownMenuItemIndicator">
                    <BoxIcon />
                  </div>
                )}
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <CheckboxIcon />
                </DropdownMenu.ItemIndicator>
                Menu Item
              </DropdownMenu.CheckboxItem>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <input
          type="text"
          className="SpecialInput"
          placeholder="Amount"
        ></input>
        <input
          type="text"
          className="SpecialInput"
          placeholder="Memo (Optional)"
        ></input>
      </div>
    </>
  );
};

export default DropdownMenuDemo;
