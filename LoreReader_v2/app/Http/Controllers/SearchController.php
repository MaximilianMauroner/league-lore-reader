<?php

namespace App\Http\Controllers;

use App\Http\Resources\SearchResource;
use App\Http\Resources\StoryResource;
use App\Models\Champion;
use App\Models\Location;
use App\Models\Story;
use Illuminate\Http\Request;

class SearchController extends Controller
{

    /**
     * Display the specified resource.
     *
     * @param string $search_term
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function show(string $search_term)
    {
        $storyResult = Story::where('story', 'LIKE', '%' . $search_term . '%')->orWhere('title', 'LIKE', '%' . $search_term . '%')->paginate(5,['id','title', 'image_url', 'text_id']);
        $championResult = Champion::where('name', 'LIKE', '%' . $search_term . '%')->orWhere('title', 'LIKE', '%' . $search_term . '%')->paginate(5);
        $locationResult = Location::where('title', 'LIKE', '%' . $search_term . '%')->orWhere('description', 'LIKE', '%' . $search_term . '%')->paginate(5);
        return SearchResource::collection([
            'stories' => $storyResult,
            'champions' => $championResult,
            'locations' => $locationResult,
        ]);
    }
}
