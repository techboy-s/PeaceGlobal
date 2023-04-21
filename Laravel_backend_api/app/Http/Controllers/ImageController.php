<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;

class ImageController extends controller
{

        public function index(){
            return response()->json(
                Image::all()
            );
        }

        // public function upload(Request $request){

        //     if($request->has('image')){
        //         $image = $request->file('image');

        //         $name = time().'.'.$image->getClientOriginalExtension();
        //         $image -> move('images/', $name);

        //         Image::create(['name'=>$name]);

        //         return response()->json(['success'=>'Uploaded Successfully']);
        //     }

        //     return response()->json('Please try again');
        // }
        public function upload(Request $request)
{
    if ($request->hasFile('image') && $request->file('image')->isValid()) {
        $image = $request->file('image');

        $name = time() . '.' . $image->getClientOriginalExtension();
        $image->move('images/', $name);

        Image::create(['name' => $name]);

        return response()->json(['success' => 'Uploaded Successfully']);
    }

    return response()->json(['error' => 'Invalid file']);
}

}