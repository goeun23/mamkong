import { FeedItem } from "@/store/slices/feedSlice";
import { JSX } from "react";


export default function FeedCard({item}:{item:FeedItem}):JSX.Element {
    return (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="text-sm text-gray-500 mb-2">
            {new Date(item.createdAt).toLocaleString('ko-KR')}
          </div>
          <div className="text-gray-800 text-base mb-4 whitespace-pre-line">
            {item.content}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {item.emotions.map((emotion) => (
              <span
                key={emotion}
                className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700"
              >
                #{emotion}
              </span>
            ))}
          </div>
          <div className="bg-gray-100 rounded p-3 text-sm text-gray-600">
            {item.aiResponse}
          </div>
        </div>
      )
}