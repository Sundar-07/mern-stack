import React from "react";
import { TrashIcon, PencilAltIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/outline";

const Todo = () => {
  return (
    <>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Learn react
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Author:sundar
                  </p>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Added:4 days ago
                  </p>
                </div>
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <div class="flex space-x-4 ...">
                  <div>
                    <a className="cursor-pointer">
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    </a>
                  </div>
                  <div>
                    <a className="cursor-pointer">
                      <PencilAltIcon className="h-5 w-5 text-blue-500" />
                    </a>
                  </div>
                  <div>
                    <a className="cursor-pointer">
                      <TrashIcon className="h-5 w-5 text-red-500" />
                    </a>
                  </div>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default Todo;
