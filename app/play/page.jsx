import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Play() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <div className="h-[30rem] overflow-y-auto p-4 border border-gray-200 rounded-md">
          {/* Chat messages will go here */}
        </div>

        <div className="mt-4 flex items-center">
          <Button variant="destructive" className="mr-2">
            Reset
          </Button>

          <Textarea
            placeholder="Type your message..."
            className="mr-2 resize-none"
          />

          <Button>Send</Button>
        </div>
      </div>
    </div>
  );
}
