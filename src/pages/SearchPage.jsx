import React from 'react'
import SearchSidebar from '../components/SearchSidebar'
import SearchedContents from '../components/SearchedContents'

export default function SearchPage() {
  return (
    <div className="px-8">
      <div className="flex gap-4">
        <div className="py-4 min-h-[665px] w-1/4 bg-purple-200">
          <SearchSidebar />
        </div>
        <div className="w-3/4 bg-purple-300">
          <SearchedContents />
        </div>
      </div>
    </div>
  )
}
